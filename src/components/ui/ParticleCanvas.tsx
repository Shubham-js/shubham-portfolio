"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleCanvas.module.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
  life: number;
  maxLife: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let rafId: number;
    const pts: Particle[] = [];

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function makeParticle(init: boolean): Particle {
      return {
        x: Math.random() * W,
        y: init ? Math.random() * H : H + 5,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.35 + 0.08),
        r: Math.random() * 1.6 + 0.3,
        o: Math.random() * 0.5 + 0.1,
        life: 0,
        maxLife: Math.random() * 280 + 160,
      };
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 100; i++) pts.push(makeParticle(true));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife || p.y < -5) {
          Object.assign(p, makeParticle(false));
        }
        const t = p.life / p.maxLife;
        const alpha = p.o * (t < 0.1 ? t / 0.1 : t > 0.85 ? (1 - t) / 0.15 : 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.055 * (1 - d / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
