// Point-cloud targets the 3D scene morphs between. Pure functions (no DOM / WebGL) so they can be unit-tested.
const TAU = Math.PI * 2;
let seed = 1337;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
const reset = () => { seed = 1337; };

function fill(n, fn) {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const p = fn(i, n); a[i * 3] = p[0]; a[i * 3 + 1] = p[1]; a[i * 3 + 2] = p[2]; }
  return a;
}

export function sphere(n, r = 2.6) {
  reset();
  const g = Math.PI * (3 - Math.sqrt(5));
  return fill(n, (i) => {
    const y = 1 - (i / (n - 1)) * 2, rad = Math.sqrt(1 - y * y), t = g * i, k = r * (0.97 + rnd() * 0.06);
    return [Math.cos(t) * rad * k, y * k, Math.sin(t) * rad * k];
  });
}

export function torusKnot(n, s = 1.0) {
  reset();
  return fill(n, (i) => {
    const t = (i / n) * TAU * 3, p = 2, q = 3, jitter = 0.16;
    const r = 1.2 + 0.55 * Math.cos(q * t / 3 * 1.0 + 0.0);
    const x = (2 + Math.cos(q * t / 3)) * Math.cos(p * t / 3), y = (2 + Math.cos(q * t / 3)) * Math.sin(p * t / 3), z = Math.sin(q * t / 3) * 1.4;
    return [(x + (rnd() - 0.5) * jitter) * 0.85 * s, (y + (rnd() - 0.5) * jitter) * 0.85 * s, (z + (rnd() - 0.5) * jitter + r * 0) * s];
  });
}

export function wave(n) {
  reset();
  const side = Math.ceil(Math.sqrt(n));
  return fill(n, (i) => {
    const x = (i % side) / side - 0.5, z = Math.floor(i / side) / side - 0.5;
    return [x * 11, Math.sin(x * 9) * 0.5 + Math.cos(z * 8) * 0.5 - 0.6, z * 7];
  });
}

export function lattice(n) {
  reset();
  const side = Math.round(Math.cbrt(n)), step = 4.2 / side;
  return fill(n, (i) => {
    const x = i % side, y = Math.floor(i / side) % side, z = Math.floor(i / (side * side)) % side;
    return [(x - side / 2) * step + (rnd() - 0.5) * 0.08, (y - side / 2) * step + (rnd() - 0.5) * 0.08, (z - side / 2) * step + (rnd() - 0.5) * 0.08];
  });
}

export function helix(n) {
  reset();
  return fill(n, (i) => {
    const t = (i / n) * TAU * 3.5, strand = i % 2 ? 1 : -1, k = (i / n - 0.5);
    const r = 1.8 + (rnd() - 0.5) * 0.25;
    return [Math.cos(t + (strand > 0 ? Math.PI : 0)) * r, k * 9, Math.sin(t + (strand > 0 ? Math.PI : 0)) * r];
  });
}

// A little house — "the home of animation and AI". Edges + door + windows, with a halo of dust.
export function house(n) {
  reset();
  const W = 1.9, D = 1.4, H = 1.5, R = 1.3; // half width, half depth, wall height, roof rise
  const v = (x, y, z) => [x, y, z];
  const b = [v(-W, -H / 2, -D), v(W, -H / 2, -D), v(W, -H / 2, D), v(-W, -H / 2, D), v(-W, H / 2, -D), v(W, H / 2, -D), v(W, H / 2, D), v(-W, H / 2, D)];
  const rf = [v(-W - 0.3, H / 2, 0), v(W + 0.3, H / 2, 0), v(-W - 0.3, H / 2 + R, 0), v(W + 0.3, H / 2 + R, 0)];
  const segs = [
    [b[0], b[1]], [b[1], b[2]], [b[2], b[3]], [b[3], b[0]], [b[4], b[5]], [b[5], b[6]], [b[6], b[7]], [b[7], b[4]],
    [b[0], b[4]], [b[1], b[5]], [b[2], b[6]], [b[3], b[7]],
    [v(-W, H / 2, D), v(-W + 0.0, H / 2 + R, 0)], [v(W, H / 2, D), v(W, H / 2 + R, 0)], [v(-W, H / 2, -D), v(-W, H / 2 + R, 0)], [v(W, H / 2, -D), v(W, H / 2 + R, 0)],
    [v(-W, H / 2 + R, 0), v(W, H / 2 + R, 0)],
    // door (front face z = D)
    [v(-0.35, -H / 2, D), v(-0.35, 0.15, D)], [v(0.35, -H / 2, D), v(0.35, 0.15, D)], [v(-0.35, 0.15, D), v(0.35, 0.15, D)],
    // windows
    [v(-1.45, 0.0, D), v(-0.85, 0.0, D)], [v(-1.45, 0.5, D), v(-0.85, 0.5, D)], [v(-1.45, 0.0, D), v(-1.45, 0.5, D)], [v(-0.85, 0.0, D), v(-0.85, 0.5, D)],
    [v(0.85, 0.0, D), v(1.45, 0.0, D)], [v(0.85, 0.5, D), v(1.45, 0.5, D)], [v(0.85, 0.0, D), v(0.85, 0.5, D)], [v(1.45, 0.0, D), v(1.45, 0.5, D)],
    // chimney
    [v(1.0, H / 2 + 0.6, 0.2), v(1.0, H / 2 + 1.5, 0.2)], [v(1.4, H / 2 + 0.4, 0.2), v(1.4, H / 2 + 1.5, 0.2)], [v(1.0, H / 2 + 1.5, 0.2), v(1.4, H / 2 + 1.5, 0.2)],
  ];
  const lens = segs.map(([a, c]) => Math.hypot(c[0] - a[0], c[1] - a[1], c[2] - a[2]));
  const total = lens.reduce((s, l) => s + l, 0), solid = Math.floor(n * 0.9);
  const out = new Float32Array(n * 3);
  let idx = 0;
  segs.forEach(([a, c], s) => {
    const count = Math.max(2, Math.round((lens[s] / total) * solid));
    for (let k = 0; k < count && idx < solid; k++, idx++) {
      const t = rnd();
      out[idx * 3] = a[0] + (c[0] - a[0]) * t + (rnd() - 0.5) * 0.04;
      out[idx * 3 + 1] = a[1] + (c[1] - a[1]) * t + (rnd() - 0.5) * 0.04;
      out[idx * 3 + 2] = a[2] + (c[2] - a[2]) * t + (rnd() - 0.5) * 0.04;
    }
  });
  for (; idx < n; idx++) { // halo of dust floating around the house
    const a = rnd() * TAU, u = rnd() * 2 - 1, r = 3 + rnd() * 2.2, s = Math.sqrt(1 - u * u);
    out[idx * 3] = Math.cos(a) * s * r; out[idx * 3 + 1] = u * r * 0.7; out[idx * 3 + 2] = Math.sin(a) * s * r;
  }
  return out;
}

export const SHAPE_FACTORIES = { sphere, torusKnot, wave, lattice, helix, house };
export const SHAPE_NAMES = Object.keys(SHAPE_FACTORIES);
export function buildShapes(n) { return Object.fromEntries(SHAPE_NAMES.map((k) => [k, SHAPE_FACTORIES[k](n)])); }
