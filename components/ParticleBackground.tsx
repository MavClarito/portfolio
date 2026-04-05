"use client";

import React, { useEffect, useRef } from "react";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const minDistance = 120;
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    let clientX: number | null = null;
    let clientY: number | null = null;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      clientX = event.clientX;
      clientY = event.clientY;
    };

    const handleMouseOut = () => {
      clientX = null;
      clientY = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = Math.random() * (canvas.width - size * 2 - (size * 2)) + size * 2;
        const y = Math.random() * (canvas.height - size * 2 - (size * 2)) + size * 2;
        const speedMultiplier = 0.3;
        const directionX = ((Math.random() * 2) - 1) * speedMultiplier;
        const directionY = ((Math.random() * 2) - 1) * speedMultiplier;
        const color = "rgba(0, 191, 255, 0.5)"; // Deep sky blue

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);

          if (distance < minDistance * minDistance) {
            opacityValue = 1 - distance / (minDistance * minDistance);
            if (!ctx) continue;
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacityValue * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const connectMouse = () => {
      if (mouse.x === null || mouse.y === null) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        const distance =
          (particlesArray[a].x - mouse.x) * (particlesArray[a].x - mouse.x) +
          (particlesArray[a].y - mouse.y) * (particlesArray[a].y - mouse.y);

        if (distance < mouse.radius * mouse.radius) {
          opacityValue = 1 - distance / (mouse.radius * mouse.radius);
          if (!ctx) continue;
          ctx.strokeStyle = `rgba(0, 191, 255, ${opacityValue * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (clientX !== null && clientY !== null) {
        const rect = canvas.getBoundingClientRect();
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          mouse.x = (clientX - rect.left) * (canvas.width / rect.width);
          mouse.y = (clientY - rect.top) * (canvas.height / rect.height);
        } else {
          mouse.x = null;
          mouse.y = null;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      connectMouse();
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
