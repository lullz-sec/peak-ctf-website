import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    // Hex characters for CTF vibe
    const chars = "0123456789ABCDEF"; 

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; // Dark slate with low opacity
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#10b981'; // Emerald 500
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomly make some characters brighter for a "glint" effect
        const isBright = Math.random() > 0.98;
        ctx.fillStyle = isBright ? '#86efac' : '#059669'; // Bright green vs darker green

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it crosses screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 24; // Cinematic framerate
    const interval = 1000 / fps;

    const animate = (time: number) => {
        const deltaTime = time - lastTime;
        if (deltaTime >= interval) {
            draw();
            lastTime = time;
        }
        animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const newColumns = Math.ceil(width / fontSize);
      if (newColumns > drops.length) {
         const added = new Array(newColumns - drops.length).fill(1);
         drops.push(...added);
      } else if (newColumns < drops.length) {
         drops.splice(newColumns);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
    />
  );
};

export default MatrixRain;