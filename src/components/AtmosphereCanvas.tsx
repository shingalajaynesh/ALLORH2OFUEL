"use client";

import React, { useEffect, useRef } from "react";

interface AtmosphereCanvasProps {
  isRaining?: boolean;
  humidity?: number; // 0 to 100
  ionization?: number; // 0 to 100
}

export const AtmosphereCanvas: React.FC<AtmosphereCanvasProps> = ({
  isRaining = false,
  humidity = 50,
  ionization = 20,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 }); // rx, ry are interpolated coordinates

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle classes
    class VaporParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      opacity: number;
      charge: number; // -1 to +1
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseSize = Math.random() * 8 + 4;
        this.size = this.baseSize;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.charge = Math.random() * 2 - 1;
        this.color =
          this.charge > 0
            ? "rgba(6, 182, 212," // Cyan
            : "rgba(16, 185, 129,"; // Aurora Green
      }

      update(isRainingActive: boolean, hum: number, ion: number) {
        // Brownian floating
        this.x += this.vx;
        this.y += this.vy;

        // Interactive mouse force
        const dx = mouseRef.current.rx - this.x;
        const dy = mouseRef.current.ry - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          // Attracted or repelled based on charge & ionization
          const force = ((220 - dist) / 220) * (ion / 100) * 0.4;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * this.charge;
          this.y += Math.sin(angle) * force * this.charge;
        }

        // Rain physics
        if (isRainingActive) {
          // Accelerate downwards
          this.vy += 0.25; // gravity
          this.vx += (Math.random() - 0.5) * 0.1; // turbulence
          // Max speed terminal velocity
          if (this.vy > 8) this.vy = 8;
        } else {
          // Float drift
          const windX = Math.sin(this.y * 0.005 + Date.now() * 0.0005) * 0.15;
          this.x += windX;

          // Re-stabilize speed
          this.vx += (Math.random() - 0.5) * 0.02;
          this.vy += (Math.random() - 0.5) * 0.02;
          // Clamp float speed
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 1.2) {
            this.vx *= 0.95;
            this.vy *= 0.95;
          }
        }

        // Boundaries wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;

        if (isRainingActive && this.y > height) {
          // Splash and reset at top
          this.y = 0;
          this.x = Math.random() * width;
          this.vy = Math.random() * 2 + 3;
          this.vx = (Math.random() - 0.5) * 0.5;
        } else if (this.y < 0) {
          this.y = height;
        } else if (this.y > height) {
          this.y = 0;
        }

        // Size scaling with humidity
        this.size = this.baseSize * (0.6 + hum / 100);
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        const radGrd = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        radGrd.addColorStop(0, `${this.color}${this.opacity * 1.5})`);
        radGrd.addColorStop(1, `${this.color}0)`);
        ctx.fillStyle = radGrd;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles based on window width
    const particleCount = Math.min(Math.floor((width * height) / 9000), 200);
    const particles: VaporParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new VaporParticle());
    }

    // Render loop
    const render = () => {
      // Clear with very subtle atmospheric trail to make rain look smooth
      ctx.fillStyle = isRaining ? "rgba(11, 19, 43, 0.2)" : "#0b132b";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse interpolation (rx, ry)
      const mouse = mouseRef.current;
      mouse.rx += (mouse.x - mouse.rx) * 0.08;
      mouse.ry += (mouse.y - mouse.ry) * 0.08;

      // Draw atmospheric pressure Isobars around the cursor
      if (mouse.rx > 0 && mouse.ry > 0) {
        ctx.strokeStyle = "rgba(6, 182, 212, 0.035)";
        ctx.lineWidth = 1;
        const maxR = 240;
        const ringCount = 4;
        for (let r = 1; r <= ringCount; r++) {
          const radius = (maxR / ringCount) * r - ((Date.now() * 0.03) % (maxR / ringCount));
          ctx.beginPath();
          ctx.arc(mouse.rx, mouse.ry, Math.max(radius, 5), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw coordinate lines
        ctx.strokeStyle = "rgba(6, 182, 212, 0.02)";
        ctx.beginPath();
        ctx.moveTo(mouse.rx, 0);
        ctx.lineTo(mouse.rx, height);
        ctx.moveTo(0, mouse.ry);
        ctx.lineTo(width, mouse.ry);
        ctx.stroke();

        // Draw miniature indicator readout
        ctx.fillStyle = "rgba(6, 182, 212, 0.35)";
        ctx.font = "9px monospace";
        ctx.fillText(
          `ATM_P: 1013.2hPa | P_VAR: +${(ionization * 0.12).toFixed(2)}`,
          mouse.rx + 10,
          mouse.ry - 10
        );
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(isRaining, humidity, ionization);
        p.draw(ctx);
      });

      // Raining lines overlay
      if (isRaining) {
        ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 40; i++) {
          const rx = Math.random() * width;
          const ry = Math.random() * height;
          const len = Math.random() * 30 + 20;
          ctx.moveTo(rx, ry);
          ctx.lineTo(rx - len * 0.08, ry + len);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isRaining, humidity, ionization]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 block pointer-events-none" />;
};
