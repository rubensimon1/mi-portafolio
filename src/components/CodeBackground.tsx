"use client";

import React, { useEffect, useRef } from 'react';

export const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = ['{', '}', '</>', '()', '=>', 'import', 'const', 'function', 'async', 'await', 'return', 'if', 'else', 'map', '[]'];
    const particles: {
      x: number;
      y: number;
      text: string;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }[] = [];

    // Crear partículas
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: chars[Math.floor(Math.random() * chars.length)],
        size: Math.random() * 14 + 12,
        speedY: (Math.random() * 0.5 + 0.1) * -1, // Flotan hacia arriba lentamente
        speedX: (Math.random() * 0.4 - 0.2), // Pequeño desvío horizontal
        opacity: Math.random() * 0.2 + 0.1, // Visibilidad intermedia (entre 0.1 y 0.3)
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.font = `bold ${p.size}px monospace`;
        
        // Efecto de difuminado: la partícula se vuelve transparente al acercarse al borde superior
        const fadeOutDistance = 200;
        const fade = Math.min(1, Math.max(0, p.y / fadeOutDistance));
        
        // Color azul tecnológico (Tailwind blue-500) con el fade aplicado
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * fade})`; 
        ctx.fillText(p.text, p.x, p.y);

        p.y += p.speedY;
        p.x += p.speedX;

        // Reiniciar cuando salen por arriba
        if (p.y < -50) {
          p.y = canvas.height + 50;
          p.x = Math.random() * canvas.width;
        }
        // Rebotar ligeramente en los bordes
        if (p.x < -50 || p.x > canvas.width + 50) {
          p.speedX *= -1;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Fondo oscuro base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Canvas animado con los símbolos de código flotando */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />

      {/* Degradado para oscurecer la parte inferior y que los textos destaquen más */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      {/* Luces difusas sutiles (las que tenías, pero detrás del todo) */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600 opacity-10 blur-[128px]" />
      <div className="absolute top-[60vh] -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500 opacity-[0.07] blur-[128px]" />
    </div>
  );
};
