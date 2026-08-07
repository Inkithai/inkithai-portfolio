"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Interactive constellation background.
 * Slowly drifting nodes connected by proximity lines, with a gentle
 * attraction + link highlight around the cursor. Respects
 * prefers-reduced-motion (renders a single static frame) and pauses
 * when the tab is hidden.
 */

const DOT_COLORS = ["16,185,129", "52,211,153", "110,231,183", "148,163,184"];
const LINK_DIST = 120;
const MOUSE_DIST = 170;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  twinkle: number;
  twinkleSpeed: number;
};

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let running = false;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seed = () => {
      const count = Math.min(100, Math.max(36, Math.floor((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 0.8 + Math.random() * 1.4,
        color: DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)],
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.008 + Math.random() * 0.02,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      // Proximity links between nodes (+ links toward the cursor)
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < MOUSE_DIST * MOUSE_DIST) {
          const alpha = (1 - Math.sqrt(md2) / MOUSE_DIST) * 0.32;
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Nodes with a soft twinkle
      for (const p of particles) {
        const alpha = 0.3 + Math.sin(p.twinkle) * 0.22;
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of particles) {
        // Gentle attraction toward the cursor
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md > 1 && md < MOUSE_DIST * 1.6) {
          const force = 0.014 * (1 - md / (MOUSE_DIST * 1.6));
          p.vx += (mdx / md) * force;
          p.vy += (mdy / md) * force;
        }

        // Clamp velocity so drifting stays calm
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 0.6) {
          p.vx = (p.vx / speed) * 0.6;
          p.vy = (p.vy / speed) * 0.6;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += p.twinkleSpeed;

        // Wrap around edges
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;
      }

      draw();
      rafId = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reducedMotion) return;
      running = true;
      rafId = requestAnimationFrame(step);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const onResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    if (reducedMotion) {
      draw(); // static frame only
    } else {
      start();
      window.addEventListener("resize", onResize, { passive: true });
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block w-full h-full", className)}
      aria-hidden="true"
    />
  );
}
