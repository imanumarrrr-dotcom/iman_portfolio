// The 3D "home": a particle cloud that morphs between shapes as you scroll, a neural lattice in the hero,
// cursor repulsion in the vertex shader, and colours that follow the active theme.
import * as THREE from 'three';
import gsap from 'gsap';
import { buildShapes, sphere } from './shapes.js';

// per-section state: which shape, where it sits, how bright it is, whether the neural lattice shows
export const STATES = {
  home:    { shape: 'sphere',    x: 0,    y: 0,    z: 0,  s: 1,    alpha: 1,    lat: 1, spin: 1, ry: 0 },
  about:   { shape: 'torusKnot', x: -3.4, y: 0,    z: -1, s: 0.8,  alpha: 0.9,  lat: 0, spin: 1, ry: 0 },
  skills:  { shape: 'lattice',   x: 3.8,  y: 0,    z: -1, s: 0.85, alpha: 0.8,  lat: 0, spin: 1, ry: 0 },
  work:    { shape: 'wave',      x: 0,    y: -1.2, z: -5, s: 1,    alpha: 0.4,  lat: 0, spin: 0.2, ry: 0 },
  lab:     { shape: 'helix',     x: 3.8,  y: 0,    z: -1, s: 0.8,  alpha: 0.6,  lat: 0, spin: 1, ry: 0 },
  journey: { shape: 'sphere',    x: 3.9,  y: 0,    z: -2, s: 0.65, alpha: 0.7,  lat: 0, spin: 1, ry: 0 },
  contact: { shape: 'house',     x: 0,    y: -0.3, z: 0,  s: 1.15, alpha: 1,    lat: 0, spin: 0, ry: 0.35 },
};

const VERT = /* glsl */ `
uniform float uTime; uniform float uMix; uniform float uPx; uniform vec2 uMouse; uniform float uAspect;
attribute vec3 aA; attribute vec3 aB; attribute float aRand;
varying float vR; varying float vL;
void main(){
  float m = clamp((uMix - aRand * 0.4) / 0.6, 0.0, 1.0);
  m = m * m * (3.0 - 2.0 * m);
  vec3 p = mix(aA, aB, m);
  float sw = sin(m * 3.14159265);
  p += normalize(p + vec3(0.001)) * sw * (1.2 + aRand * 1.6);
  p.y += sin(uTime * 0.7 + p.x * 1.1 + aRand * 6.2831) * 0.07;
  p.x += cos(uTime * 0.5 + p.y * 1.3 + aRand * 6.2831) * 0.05;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 sp = clip.xy / clip.w;
  vec2 d = sp - uMouse; d.x *= uAspect;
  float push = smoothstep(0.42, 0.0, length(d));
  mv.xy += normalize(d + vec2(0.0001)) * push * 0.9;
  vL = push; vR = aRand;
  gl_PointSize = (1.6 + aRand * 2.4 + push * 2.0) * uPx * (9.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = /* glsl */ `
uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3; uniform float uAlpha;
varying float vR; varying float vL;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c);
  if (r > 0.5) discard;
  float a = smoothstep(0.5, 0.0, r); a *= a;
  vec3 col = mix(uC1, uC2, vR);
  col = mix(col, uC3, step(0.93, vR) * 0.9 + vL * 0.6);
  gl_FragColor = vec4(col, a * uAlpha);
}`;

export function createScene(canvas, { reduced = false } = {}) {
  // probe on a throw-away canvas so a missing WebGL never logs errors (and the real canvas keeps its own attributes)
  const probe = document.createElement('canvas');
  if (!(probe.getContext && (probe.getContext('webgl2') || probe.getContext('webgl')))) return null;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    return null; // no WebGL: the CSS gradient background stays
  }
  const small = window.innerWidth < 820;
  const N = small ? 3500 : 7000;
  const shapes = buildShapes(N);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 9;
  const world = new THREE.Group();
  scene.add(world);

  // ── morphing particle cloud
  const geo = new THREE.BufferGeometry();
  const rand = new Float32Array(N);
  for (let i = 0; i < N; i++) rand[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aA', new THREE.BufferAttribute(new Float32Array(shapes.sphere), 3));
  geo.setAttribute('aB', new THREE.BufferAttribute(new Float32Array(shapes.sphere), 3));
  geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
  const u = {
    uTime: { value: 0 }, uMix: { value: 1 }, uPx: { value: renderer.getPixelRatio() }, uAspect: { value: 1 },
    uMouse: { value: new THREE.Vector2(9, 9) }, uAlpha: { value: 1 },
    uC1: { value: new THREE.Color('#8B6CFF') }, uC2: { value: new THREE.Color('#5CFFC8') }, uC3: { value: new THREE.Color('#FF7A59') },
  };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  world.add(points);

  // ── neural lattice (hero): nodes on a smaller sphere joined to their nearest neighbours
  const M = small ? 110 : 190, nodes = sphere(M, 2.15), edges = [];
  for (let i = 0; i < M; i++) {
    const near = [];
    for (let j = 0; j < M; j++) {
      if (i === j) continue;
      const d = Math.hypot(nodes[i * 3] - nodes[j * 3], nodes[i * 3 + 1] - nodes[j * 3 + 1], nodes[i * 3 + 2] - nodes[j * 3 + 2]);
      near.push([d, j]);
    }
    near.sort((a, b) => a[0] - b[0]);
    near.slice(0, 3).forEach(([, j]) => { if (i < j) edges.push(i, j); });
  }
  const lp = new Float32Array(edges.length * 3);
  edges.forEach((n, k) => { lp[k * 3] = nodes[n * 3]; lp[k * 3 + 1] = nodes[n * 3 + 1]; lp[k * 3 + 2] = nodes[n * 3 + 2]; });
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(lp, 3));
  const lineMat = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: '#8B6CFF', transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending }));
  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodes), 3));
  const nodeMat = new THREE.Points(nodeGeo, new THREE.PointsMaterial({ color: '#5CFFC8', size: 0.07, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending }));
  const lattice = new THREE.Group();
  lattice.add(lineMat, nodeMat);
  world.add(lattice);

  // ── state
  let current = 'sphere', morphing = false, pending = null, section = 'home', time = 0, spin = 1, baseRy = 0;
  const ptr = new THREE.Vector2(0, 0), ptrS = new THREE.Vector2(9, 9);
  let latOpacity = 1;
  const mobile = () => window.innerWidth < 820;

  function applyState(name, instant) {
    const st = STATES[name] || STATES.home, k = mobile() ? 0.25 : 1, sc = mobile() ? 0.78 : 1, d = instant || reduced ? 0.01 : 1.7;
    gsap.to(world.position, { x: st.x * k, y: st.y, z: st.z, duration: d, ease: 'power3.inOut', overwrite: true });
    gsap.to(world.scale, { x: st.s * sc, y: st.s * sc, z: st.s * sc, duration: d, ease: 'power3.inOut', overwrite: true });
    gsap.to(u.uAlpha, { value: st.alpha * (mobile() ? 0.8 : 1), duration: d, overwrite: true });
    const lo = { v: latOpacity };
    gsap.to(lo, { v: st.lat, duration: d, onUpdate() { latOpacity = lo.v; lineMat.material.opacity = 0.25 * lo.v; nodeMat.material.opacity = 0.95 * lo.v; lattice.visible = lo.v > 0.01; } });
    gsap.to({ s: spin }, { s: st.spin, duration: d, onUpdate() { spin = this.targets()[0].s; } });
    gsap.to({ r: baseRy }, { r: st.ry, duration: d, onUpdate() { baseRy = this.targets()[0].r; } });
    morphTo(st.shape, instant);
  }

  function morphTo(shape, instant) {
    if (shape === current && !morphing) return;
    if (morphing) { pending = shape; return; }
    morphing = true;
    geo.attributes.aA.array.set(shapes[current]);
    geo.attributes.aB.array.set(shapes[shape]);
    geo.attributes.aA.needsUpdate = geo.attributes.aB.needsUpdate = true;
    u.uMix.value = 0;
    gsap.to(u.uMix, {
      value: 1, duration: instant || reduced ? 0.01 : 1.9, ease: 'power2.inOut',
      onComplete() {
        current = shape; morphing = false;
        if (pending && pending !== current) { const n = pending; pending = null; morphTo(n); } else pending = null;
      },
    });
  }

  function setSection(name) {
    if (!STATES[name] || name === section) return;
    section = name;
    applyState(name, false);
  }

  function setTheme({ c1, c2, c3, dark }) {
    [['uC1', c1], ['uC2', c2], ['uC3', c3]].forEach(([k, hex]) => { const c = new THREE.Color(hex); gsap.to(u[k].value, { r: c.r, g: c.g, b: c.b, duration: 0.9 }); });
    const blend = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
    mat.blending = blend; lineMat.material.blending = blend; nodeMat.material.blending = blend;
    mat.needsUpdate = lineMat.material.needsUpdate = nodeMat.material.needsUpdate = true;
    lineMat.material.color.set(c1); nodeMat.material.color.set(c2);
  }

  function setPointer(x, y) { ptr.set(x, y); }

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    u.uAspect.value = w / h; u.uPx.value = renderer.getPixelRatio();
    applyState(section, true);
  }

  let raf = 0, last = performance.now();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    time += reduced ? 0 : dt;
    u.uTime.value = time;
    ptrS.lerp(ptr, 0.08);
    u.uMouse.value.set(ptr.x > 5 ? 9 : ptrS.x, ptr.x > 5 ? 9 : ptrS.y);
    world.rotation.y = time * 0.09 * spin + baseRy + ptrS.x * 0.25;
    world.rotation.x = -ptrS.y * 0.14 + Math.sin(time * 0.2) * 0.04 * spin;
    lattice.rotation.y = -time * 0.05;
    camera.position.x = ptrS.x * 0.35; camera.position.y = ptrS.y * 0.2;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  resize();
  applyState('home', true);
  raf = requestAnimationFrame(frame);
  const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else { last = performance.now(); raf = requestAnimationFrame(frame); } };
  document.addEventListener('visibilitychange', onVis);
  return { setSection, setTheme, setPointer, resize, destroy() { cancelAnimationFrame(raf); document.removeEventListener('visibilitychange', onVis); renderer.dispose(); } };
}
