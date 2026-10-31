// Generative poster art for each project card (drawn on a canvas, no image files needed).
const W = 800, H = 1000;

function rng(seedStr) {
  let s = 0; for (const c of seedStr) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
function rr(c, x, y, w, h, r) {
  c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
function glow(c, x, y, r, col, a = 0.5) {
  const g = c.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, col + Math.round(a * 255).toString(16).padStart(2, '0')); g.addColorStop(1, col + '00');
  c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
}

const MOTIFS = {
  docs(c, [a, b], R) {
    for (let i = 0; i < 3; i++) {
      c.save(); c.translate(400, 520); c.rotate((-0.2 + i * 0.2)); c.translate(-170, -230 + i * 20);
      rr(c, 0, 0, 340, 440, 22); c.fillStyle = `rgba(255,255,255,${0.08 + i * 0.05})`; c.fill(); c.strokeStyle = a + '99'; c.lineWidth = 2; c.stroke();
      for (let l = 0; l < 9; l++) { c.fillStyle = l === 3 && i === 2 ? b : 'rgba(255,255,255,.28)'; c.fillRect(34, 46 + l * 38, l % 3 === 2 ? 170 : 270, 10); }
      c.restore();
    }
    c.lineWidth = 12; c.strokeStyle = b; c.beginPath(); c.arc(520, 640, 86, 0, 7); c.stroke();
    c.lineCap = 'round'; c.beginPath(); c.moveTo(582, 702); c.lineTo(660, 780); c.stroke(); glow(c, 520, 640, 160, b, 0.35);
  },
  pearls(c, [a, b], R) {
    c.strokeStyle = 'rgba(255,255,255,.25)'; c.lineWidth = 3; c.beginPath(); c.moveTo(60, 700);
    c.bezierCurveTo(240, 360, 560, 360, 740, 700); c.stroke();
    for (let i = 0; i < 9; i++) {
      const t = i / 8, x = (1 - t) ** 3 * 60 + 3 * (1 - t) ** 2 * t * 240 + 3 * (1 - t) * t * t * 560 + t ** 3 * 740;
      const y = (1 - t) ** 3 * 700 + 3 * (1 - t) ** 2 * t * 360 + 3 * (1 - t) * t * t * 360 + t ** 3 * 700, r = 34 + Math.sin(t * Math.PI) * 30;
      const g = c.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r); g.addColorStop(0, '#fff'); g.addColorStop(0.5, i % 2 ? a : b); g.addColorStop(1, '#00000066');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); glow(c, x, y, r * 2.2, i % 2 ? a : b, 0.18);
    }
  },
  bars(c, [a, b], R) {
    c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 1; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(90, 330 + i * 90); c.lineTo(710, 330 + i * 90); c.stroke(); }
    const pts = []; for (let i = 0; i < 7; i++) {
      const h = 80 + R() * 240, x = 110 + i * 85; const g = c.createLinearGradient(0, 780 - h, 0, 780); g.addColorStop(0, a); g.addColorStop(1, a + '22');
      c.fillStyle = g; rr(c, x, 780 - h, 48, h, 10); c.fill(); pts.push([x + 24, 700 - R() * 300]);
    }
    c.strokeStyle = b; c.lineWidth = 6; c.lineJoin = 'round'; c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke();
    pts.forEach(([x, y]) => { c.fillStyle = '#fff'; c.beginPath(); c.arc(x, y, 9, 0, 7); c.fill(); }); glow(c, 400, 520, 320, b, 0.18);
  },
  pulse(c, [a, b], R) {
    for (let i = 1; i < 5; i++) { c.strokeStyle = `rgba(255,255,255,${0.14 - i * 0.025})`; c.lineWidth = 2; c.beginPath(); c.arc(400, 520, i * 100, 0, 7); c.stroke(); }
    c.strokeStyle = a; c.lineWidth = 8; c.lineJoin = 'round'; c.lineCap = 'round'; c.beginPath(); c.moveTo(40, 520);
    [[200, 520], [250, 520], [290, 400], [340, 680], [390, 330], [440, 560], [480, 520], [600, 520], [640, 470], [680, 520], [760, 520]].forEach(([x, y]) => c.lineTo(x, y)); c.stroke();
    glow(c, 390, 330, 200, a, 0.4); c.fillStyle = b; rr(c, 360, 760, 80, 24, 6); c.fill(); rr(c, 388, 732, 24, 80, 6); c.fill();
  },
  radar(c, [a, b], R) {
    for (let i = 1; i < 5; i++) { c.strokeStyle = `rgba(255,255,255,${0.22 - i * 0.04})`; c.lineWidth = 2; c.beginPath(); c.arc(400, 520, i * 85, 0, 7); c.stroke(); }
    c.strokeStyle = 'rgba(255,255,255,.18)'; c.beginPath(); c.moveTo(400, 150); c.lineTo(400, 890); c.moveTo(30, 520); c.lineTo(770, 520); c.stroke();
    const g = c.createLinearGradient(400, 520, 700, 300); g.addColorStop(0, a + '88'); g.addColorStop(1, a + '00');
    c.fillStyle = g; c.beginPath(); c.moveTo(400, 520); c.arc(400, 520, 340, -1.1, -0.35); c.closePath(); c.fill();
    for (let i = 0; i < 9; i++) { const ang = R() * 6.28, d = 60 + R() * 280; glow(c, 400 + Math.cos(ang) * d, 520 + Math.sin(ang) * d, 36, b, 0.6); c.fillStyle = '#fff'; c.beginPath(); c.arc(400 + Math.cos(ang) * d, 520 + Math.sin(ang) * d, 6, 0, 7); c.fill(); }
  },
  chat(c, [a, b], R) {
    const rows = [[90, 330, 380, false], [330, 440, 380, true], [90, 550, 300, false], [330, 660, 380, true], [90, 770, 200, false]];
    rows.forEach(([x, y, w, me], i) => { rr(c, x, y, w, 76, 30); c.fillStyle = me ? a : 'rgba(255,255,255,.12)'; c.fill(); c.fillStyle = me ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.5)'; c.fillRect(x + 28, y + 30, w - 90 - (i % 2) * 50, 12); });
    [0, 1, 2].forEach((i) => { c.fillStyle = b; c.beginPath(); c.arc(130 + i * 34, 840, 9, 0, 7); c.fill(); }); glow(c, 520, 500, 280, a, 0.2);
  },
  nodes(c, [a, b], R) {
    const n = []; for (let i = 0; i < 38; i++) n.push([90 + R() * 620, 230 + R() * 640, 4 + R() * 9]);
    c.lineWidth = 1.5; n.forEach((p, i) => { n.forEach((q, j) => { if (j > i && Math.hypot(p[0] - q[0], p[1] - q[1]) < 190) { c.strokeStyle = 'rgba(255,255,255,.2)'; c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(q[0], q[1]); c.stroke(); } }); });
    c.strokeStyle = b; c.lineWidth = 5; c.beginPath(); [0, 7, 15, 22, 30].forEach((k, i) => (i ? c.lineTo(n[k][0], n[k][1]) : c.moveTo(n[k][0], n[k][1]))); c.stroke();
    n.forEach(([x, y, r], i) => { glow(c, x, y, r * 4, i % 5 ? a : b, 0.35); c.fillStyle = i % 5 ? '#fff' : b; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); });
  },
  vase(c, [a, b], R) {
    const vase = (x, y, s, col) => {
      c.save(); c.translate(x, y); c.scale(s, s); c.beginPath(); c.moveTo(-40, -330); c.lineTo(40, -330); c.bezierCurveTo(40, -250, 150, -200, 150, -60); c.bezierCurveTo(150, 60, 70, 110, 70, 140);
      c.lineTo(-70, 140); c.bezierCurveTo(-70, 110, -150, 60, -150, -60); c.bezierCurveTo(-150, -200, -40, -250, -40, -330); c.closePath();
      const g = c.createLinearGradient(-150, 0, 150, 0); g.addColorStop(0, col + 'aa'); g.addColorStop(0.35, '#ffffffcc'); g.addColorStop(0.6, col); g.addColorStop(1, '#00000088'); c.fillStyle = g; c.fill();
      c.strokeStyle = 'rgba(0,0,0,.25)'; c.lineWidth = 3; for (let i = 0; i < 4; i++) { c.beginPath(); c.ellipse(0, -80 + i * 36, 140 - i * 10, 14, 0, 0, 7); c.stroke(); }
      c.restore();
    };
    c.fillStyle = 'rgba(0,0,0,.35)'; c.beginPath(); c.ellipse(400, 870, 260, 34, 0, 0, 7); c.fill();
    vase(280, 790, 1.0, a); vase(560, 810, 0.62, b); glow(c, 400, 480, 300, a, 0.2);
  },
};

export function drawPoster(project) {
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const c = cv.getContext && cv.getContext('2d');
  if (!c) return '';
  const R = rng(project.id), [a, b, bg] = project.palette;
  const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, bg); g.addColorStop(1, '#05060b'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  glow(c, 640, 160, 420, a, 0.35); glow(c, 120, 900, 380, b, 0.22);
  c.strokeStyle = 'rgba(255,255,255,.05)'; c.lineWidth = 1; for (let i = 0; i < W; i += 50) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, H); c.stroke(); } for (let i = 0; i < H; i += 50) { c.beginPath(); c.moveTo(0, i); c.lineTo(W, i); c.stroke(); }
  c.font = '800 360px Syne, Arial Black, sans-serif'; c.lineWidth = 2; c.strokeStyle = 'rgba(255,255,255,.12)'; c.strokeText(String(project.index).padStart(2, '0'), 40, 330);
  (MOTIFS[project.motif] || MOTIFS.nodes)(c, [a, b], R);
  c.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 900; i++) c.fillRect(R() * W, R() * H, 2, 2);
  c.font = '600 22px "Space Grotesk", Arial, sans-serif'; c.fillStyle = 'rgba(255,255,255,.75)'; c.fillText((project.category === 'ai' ? 'AI · LLM' : 'WEB · FULL-STACK') + '  /  ' + project.year, 48, 66);
  return cv.toDataURL('image/jpeg', 0.86);
}
