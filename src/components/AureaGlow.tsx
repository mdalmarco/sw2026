import { useEffect, useRef } from 'react';

/**
 * AureaGlow — efeito de "áurea" que acompanha o cursor.
 * Brilho radial suave em laranja/azul, com lerp para movimento fluido.
 * Desativado automaticamente em telas touch e quando prefers-reduced-motion.
 */
export default function AureaGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Não ativar em dispositivos touch
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const glow = glowRef.current;
    if (!glow) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => {
      glow.style.opacity = '0';
    };

    const handleEnter = () => {
      glow.style.opacity = '1';
    };

    // Loop de animação com lerp (suavização)
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      glow.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={glowRef} className="aurea-glow" aria-hidden="true" />;
}
