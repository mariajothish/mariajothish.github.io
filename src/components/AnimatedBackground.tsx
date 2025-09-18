import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      const dots: Dot[] = [];
      const numDots = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      
      dotsRef.current = dots;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;
        
        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      });
      
      // Draw connections between nearby dots
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt((dot1.x - dot2.x) ** 2 + (dot1.y - dot2.y) ** 2);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.1;
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createDots();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
    />
  );
};

export default AnimatedBackground;