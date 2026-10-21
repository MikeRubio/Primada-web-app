import { useEffect, useRef } from 'react';

export default function Hero() {
  const watchRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return undefined;

    const onScroll = () => {
      if (watchRef.current && window.scrollY < window.innerHeight * 1.2) {
        watchRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * 0.035}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">PRIMADA 1496</p>
        <h1 id="hero-title">El comienzo<br />de una historia.</h1>
        <p className="hero-lead">Nuestra identidad, en cada detalle.</p>
        <div className="button-row">
          <a className="button button--gold" href="#reserva">Quiero estar entre los primeros</a>
          <a className="button button--ghost" href="#detalles">Explorar los detalles</a>
        </div>
      </div>

      <figure className="hero-visual" aria-label="Reloj PRIMADA 1496">
        <img ref={watchRef} src="/assets/primada-1496-front.jpeg" alt="PRIMADA 1496 automático con esfera negra y correa de cuero" />
        <figcaption><span>Founders Edition</span><span>01/33 — 33/33</span></figcaption>
      </figure>

      <div className="hero-specs" aria-label="Características principales">
        <span><b>42 mm</b> Diámetro</span>
        <span><b>200 m</b> Resistencia</span>
        <span><b>SW200-1</b> Sellita automático</span>
      </div>
      <a className="scroll-cue" href="#historia" aria-label="Descubrir nuestra historia">Descubrir <i /></a>
    </section>
  );
}
