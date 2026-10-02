import React, { useEffect, useRef, useState } from 'react';

export const MotionBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalDocHeight)));
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    interface GraphicNode {
      x: number;
      y: number;
      z: number; // 0.2 (distant) to 1.2 (foreground)
      size: number;
      color: string;
      alpha: number;
      vx: number;
      vy: number;
      shape: 'cube' | 'diamond' | 'ring' | 'cross' | 'hex' | 'orbit';
      rotation: number;
      rotSpeed: number;
      pulseOffset: number;
    }

    const COLORS = [
      'rgba(34, 211, 238, ',  // Cyan
      'rgba(52, 211, 153, ',  // Emerald
      'rgba(56, 189, 248, ',  // Sky Blue
      'rgba(245, 158, 11, ',  // Amber
      'rgba(168, 85, 247, ',  // Violet
    ];

    const SHAPES: Array<GraphicNode['shape']> = ['cube', 'diamond', 'ring', 'cross', 'hex', 'orbit'];
    const count = Math.min(60, Math.max(30, Math.floor(window.innerWidth / 24)));
    const nodes: GraphicNode[] = [];

    for (let i = 0; i < count; i++) {
      const z = 0.25 + Math.random() * 0.95;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height * 3,
        z,
        size: (2.5 + Math.random() * 4.5) * z,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.25 + Math.random() * 0.45,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // 3D Isometric Cube Graphic
    function draw3DCube(
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      angle: number,
      color: string,
      alpha: number
    ) {
      context.save();
      context.translate(cx, cy);
      context.rotate(angle);
      const s = size * 3.2;

      context.strokeStyle = `${color}${alpha * 0.85})`;
      context.lineWidth = 1.2;

      // Top face
      context.beginPath();
      context.moveTo(0, -s);
      context.lineTo(s * 0.866, -s * 0.5);
      context.lineTo(0, 0);
      context.lineTo(-s * 0.866, -s * 0.5);
      context.closePath();
      context.fillStyle = `${color}${alpha * 0.12})`;
      context.fill();
      context.stroke();

      // Left face
      context.beginPath();
      context.moveTo(-s * 0.866, -s * 0.5);
      context.lineTo(0, 0);
      context.lineTo(0, s);
      context.lineTo(-s * 0.866, s * 0.5);
      context.closePath();
      context.fillStyle = `${color}${alpha * 0.06})`;
      context.fill();
      context.stroke();

      // Right face
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(s * 0.866, -s * 0.5);
      context.lineTo(s * 0.866, s * 0.5);
      context.lineTo(0, s);
      context.closePath();
      context.fillStyle = `${color}${alpha * 0.18})`;
      context.fill();
      context.stroke();

      context.restore();
    }

    // Rotating HUD Orbit Graphic
    function drawOrbitReticle(
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      angle: number,
      color: string,
      alpha: number
    ) {
      context.save();
      context.translate(cx, cy);
      context.rotate(angle);
      const r = size * 3.4;

      // Outer dashed ring
      context.strokeStyle = `${color}${alpha * 0.75})`;
      context.lineWidth = 1;
      context.setLineDash([4, 6]);
      context.beginPath();
      context.arc(0, 0, r, 0, Math.PI * 2);
      context.stroke();

      // Inner solid ring
      context.setLineDash([]);
      context.strokeStyle = `${color}${alpha * 0.5})`;
      context.beginPath();
      context.arc(0, 0, r * 0.5, 0, Math.PI * 2);
      context.stroke();

      // Cross ticks
      context.beginPath();
      context.moveTo(-r * 1.2, 0);
      context.lineTo(-r * 0.8, 0);
      context.moveTo(r * 0.8, 0);
      context.lineTo(r * 1.2, 0);
      context.moveTo(0, -r * 1.2);
      context.lineTo(0, -r * 0.8);
      context.moveTo(0, r * 0.8);
      context.lineTo(0, r * 1.2);
      context.stroke();

      // Center glowing point
      context.fillStyle = `${color}${alpha * 1.5})`;
      context.beginPath();
      context.arc(0, 0, 1.8, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth scroll lerp with scroll velocity calculation
      const prevScrollY = scrollY;
      scrollY += (targetScrollY - scrollY) * 0.085;
      scrollVelocity = Math.abs(scrollY - prevScrollY);
      lastScrollY = scrollY;

      ctx.clearRect(0, 0, width, height);

      // 1. Perspective Cybernetic Grid with Wave Ripples on Scroll
      const gridSpacing = 80;
      const gridOffsetY = -(scrollY * 0.35) % gridSpacing;

      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.035)';

      // Vertical lines with gentle sinus wave animation on scroll
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 40) {
          const waveX = x + Math.sin(y * 0.008 + time + scrollY * 0.002) * (3 + scrollVelocity * 0.4);
          if (y === 0) ctx.moveTo(waveX, y);
          else ctx.lineTo(waveX, y);
        }
        ctx.stroke();
      }

      // Horizontal lines drifting with scroll
      for (let y = gridOffsetY; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Animated Energy Beam / Connection Web between nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const screenY1 = (n1.y - scrollY * (0.2 + n1.z * 0.45)) % (height + 250);
        const drawY1 = screenY1 < -100 ? screenY1 + height + 250 : screenY1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const screenY2 = (n2.y - scrollY * (0.2 + n2.z * 0.45)) % (height + 250);
          const drawY2 = screenY2 < -100 ? screenY2 + height + 250 : screenY2;

          const dx = n1.x - n2.x;
          const dy = drawY1 - drawY2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.16 * Math.min(n1.alpha, n2.alpha);
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, drawY1);
            ctx.lineTo(n2.x, drawY2);
            ctx.stroke();

            // Energy pulse spark traveling down the wire
            const sparkPos = (time * 1.5 + i) % 1;
            const sx = n1.x + (n2.x - n1.x) * sparkPos;
            const sy = drawY1 + (drawY2 - drawY1) * sparkPos;
            ctx.fillStyle = `rgba(52, 211, 153, ${lineAlpha * 2.2})`;
            ctx.beginPath();
            ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 3. Motion Graphic Shapes (3D Cubes, Rings, Hexagons, Crosshairs)
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        // Momentum speeds up slightly when user is scrolling actively
        const speedBoost = 1 + scrollVelocity * 0.08;
        p.x += p.vx * speedBoost;
        p.y += p.vy * speedBoost;
        p.rotation += p.rotSpeed * speedBoost + scrollVelocity * 0.001 * (p.z > 0.6 ? 1 : -1);

        if (p.x < -60) p.x = width + 60;
        if (p.x > width + 60) p.x = -60;

        // Parallax depth calculation: deeper nodes move slower, foreground faster
        const scrollParallax = scrollY * (0.2 + p.z * 0.5);
        let screenY = (p.y - scrollParallax) % (height + 260);
        if (screenY < -130) screenY += height + 260;

        const currentAlpha = p.alpha * (0.8 + Math.sin(time * 2 + p.pulseOffset) * 0.2);

        if (p.shape === 'cube') {
          draw3DCube(ctx, p.x, screenY, p.size, p.rotation, p.color, currentAlpha);
        } else if (p.shape === 'orbit') {
          drawOrbitReticle(ctx, p.x, screenY, p.size, p.rotation, p.color, currentAlpha);
        } else if (p.shape === 'diamond') {
          ctx.save();
          ctx.translate(p.x, screenY);
          ctx.rotate(p.rotation);
          const s = p.size * 2.4;
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.9})`;
          ctx.fillStyle = `${p.color}${currentAlpha * 0.15})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.7, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.7, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        } else if (p.shape === 'hex') {
          ctx.save();
          ctx.translate(p.x, screenY);
          ctx.rotate(p.rotation);
          const r = p.size * 2.2;
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.8})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let h = 0; h < 6; h++) {
            const ha = (h * Math.PI) / 3;
            const hx = Math.cos(ha) * r;
            const hy = Math.sin(ha) * r;
            if (h === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        } else if (p.shape === 'cross') {
          ctx.save();
          ctx.translate(p.x, screenY);
          ctx.rotate(p.rotation);
          const l = p.size * 2.2;
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.9})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(-l, 0);
          ctx.lineTo(l, 0);
          ctx.moveTo(0, -l);
          ctx.lineTo(0, l);
          ctx.stroke();
          ctx.restore();
        } else {
          // Ring with central laser point
          ctx.save();
          ctx.translate(p.x, screenY);
          const r = p.size * 2.5;
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.8})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = `${p.color}${currentAlpha * 1.5})`;
          ctx.beginPath();
          ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic 60fps Motion Graphics Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85"
      />

      {/* Top Scroll Indicator Beam */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/[0.04] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-sm shadow-cyan-400/50 transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Ambient Moving Gradient Aurora Orbs that shift with scroll */}
      <div
        className="absolute top-1/4 -left-28 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none opacity-25 mix-blend-screen bg-gradient-to-tr from-cyan-500 via-blue-600 to-transparent transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollProgress * 220}px) scale(${1 + scrollProgress * 0.15})`,
        }}
      />

      <div
        className="absolute top-1/2 -right-28 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none opacity-20 mix-blend-screen bg-gradient-to-bl from-emerald-400 via-teal-600 to-transparent transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${-scrollProgress * 250}px) scale(${1.1 - scrollProgress * 0.1})`,
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-15 mix-blend-screen bg-gradient-to-r from-amber-500/40 via-purple-600/30 to-transparent transition-transform duration-1000 ease-out"
        style={{
          transform: `translateY(${Math.sin(scrollProgress * Math.PI) * 150}px)`,
        }}
      />

      {/* Futuristic Corner Tech Brackets */}
      <div className="absolute top-24 left-6 hidden xl:block text-cyan-400/30 font-mono text-[9px] tracking-widest uppercase select-none">
        <span>GURUGRAM · 28.4595° N, 77.0266° E</span>
        <div className="w-12 h-[1px] bg-cyan-400/20 mt-1" />
      </div>

      <div className="absolute top-24 right-6 hidden xl:block text-emerald-400/30 font-mono text-[9px] tracking-widest uppercase select-none text-right">
        <span>ALPHA RESIDENTIAL PROTOCOL</span>
        <div className="w-12 h-[1px] bg-emerald-400/20 mt-1 ml-auto" />
      </div>
    </div>
  );
};
