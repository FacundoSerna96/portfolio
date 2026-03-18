import React, { useEffect, useRef, useContext } from 'react';
import { DataContext } from '../Helpers/Context';

function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const NetworkCanvas = () => {
  const { contextSkin } = useContext(DataContext);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');

    const [R, G, B] = contextSkin ? [198, 26, 39] : [100, 20, 17];

    let elements = [];
    let W = 0, H = 0;

    function resize() {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
    }

    function branch(x, y, dx, dy, len, depth, results) {
      if (depth > 5 || len < 14) return;
      const ex = x + dx * len, ey = y + dy * len;
      if (ex < 2 || ex > W - 2 || ey < 2 || ey > H - 2) return;

      const drawDur  = 0.4 + Math.random() * 0.4;
      const stayDur  = 2.0 + Math.random() * 3.0;
      const fadeDur  = 0.6 + Math.random() * 0.6;
      const totalLife = drawDur + stayDur + fadeDur;
      const offset   = Math.random() * totalLife; // random phase start

      results.push({
        type: 'seg',
        x1: x, y1: y, x2: ex, y2: ey,
        alpha: depth === 0 ? 0.45 : 0.12 + Math.random() * 0.18,
        drawDur, stayDur, fadeDur, totalLife, offset,
      });

      if (Math.random() > 0.3) {
        results.push({
          type: 'node',
          x: ex, y: ey,
          r: depth < 2 ? 3.5 : 1.8,
          alpha: depth < 2 ? 0.5 : 0.22,
          drawDur: 0.3, stayDur: stayDur + 0.5, fadeDur: 0.5,
          totalLife: totalLife + 0.5,
          offset,
        });
      }

      const nl = len * (0.5 + Math.random() * 0.35);
      const nd = depth + 1;
      if (Math.random() > 0.35) branch(ex, ey, dx,  dy,  nl,        nd, results);
      if (Math.random() > 0.45) branch(ex, ey, dy,  dx,  nl * 0.85, nd, results);
      if (Math.random() > 0.55) branch(ex, ey, -dy, -dx, nl * 0.85, nd, results);
    }

    function build() {
      elements = [];
      const cols = 5, rows = 4;
      const dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,0],[-1,0]];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.35) {
            const ox = (c + 0.3 + Math.random() * 0.4) * W / cols;
            const oy = (r + 0.3 + Math.random() * 0.4) * H / rows;
            const n = Math.floor(2 + Math.random() * 2);
            for (let k = 0; k < n; k++) {
              const d = dirs[Math.floor(Math.random() * dirs.length)];
              branch(ox, oy, d[0], d[1], 45 + Math.random() * 35, 0, elements);
            }
          }
        }
      }
    }

    function getAlpha(el, elapsed) {
      const t = ((elapsed - el.offset) % el.totalLife + el.totalLife) % el.totalLife;
      if (t < el.drawDur) {
        return { progress: ease(t / el.drawDur), alpha: el.alpha * ease(t / el.drawDur) };
      } else if (t < el.drawDur + el.stayDur) {
        return { progress: 1, alpha: el.alpha };
      } else {
        const ft = (t - el.drawDur - el.stayDur) / el.fadeDur;
        return { progress: 1, alpha: el.alpha * ease(1 - ft) };
      }
    }

    function draw(ts) {
      const elapsed = ts / 1000;
      ctx.clearRect(0, 0, W, H);

      elements.forEach(el => {
        const { progress, alpha } = getAlpha(el, elapsed);
        if (alpha <= 0) return;

        if (el.type === 'seg') {
          const px = el.x1 + (el.x2 - el.x1) * progress;
          const py = el.y1 + (el.y2 - el.y1) * progress;
          ctx.beginPath();
          ctx.moveTo(el.x1, el.y1);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
          if (progress < 1) {
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},${Math.min(alpha * 3, 1)})`;
            ctx.fill();
          }
        } else {
          const pulse = 0.85 + 0.15 * Math.sin(elapsed * 2.2 + el.x * 0.05);
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.r * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.r * 0.32, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${alpha * 0.75})`;
          ctx.fill();
        }
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    const onResize = () => { resize(); build(); };
    window.addEventListener('resize', onResize);

    resize();
    build();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [contextSkin]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default NetworkCanvas;
