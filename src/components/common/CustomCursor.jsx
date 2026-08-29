import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const canvasRef = useRef(null);

  // Background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    // Screen resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    // Particle generator
    const handleParticleMove = (e) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color: `hsl(${Math.random() * 20 + 35}, 100%, 55%)`,
          life: 1,
        });
      }
    };
    window.addEventListener("mousemove", handleParticleMove);

    // Smooth render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.03;

        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.shadowColor = "#f59e0b";
          ctx.shadowBlur = 4;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleParticleMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      />

      {/* 2. Spotlight BG */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.12), transparent 80%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
