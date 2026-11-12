export default function Straps() {
  return (
    <section className="straps" id="correas" aria-labelledby="straps-title">
      <div className="straps-heading" data-reveal>
        <div>
          <p className="eyebrow">Dos correas · Una identidad</p>
          <h2 id="straps-title">Elige cómo llevarlo.</h2>
        </div>
        <p>
          Azul océano o negro profundo. Dos expresiones del PRIMADA 1496,
          concebidas para acompañar cada momento.
        </p>
      </div>

      <div className="straps-gallery">
        <figure className="straps-film" data-reveal>
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="PRIMADA 1496 con correa azul junto al mar y bajo el agua"
          >
            <source src="/assets/primada-1496-straps-film.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
          <figcaption>
            <span>PRIMADA 1496</span>
            <small>En su elemento</small>
          </figcaption>
        </figure>

        <figure className="strap-card" data-reveal>
          <img
            src="/assets/primada-1496-strap-blue.jpeg"
            alt="Reloj PRIMADA 1496 con correa azul océano"
            loading="lazy"
          />
          <figcaption>
            <span>01</span>
            <strong>Azul océano</strong>
          </figcaption>
        </figure>

        <figure className="strap-card" data-reveal>
          <img
            src="/assets/primada-1496-strap-black.jpeg"
            alt="Reloj PRIMADA 1496 con correa negra"
            loading="lazy"
          />
          <figcaption>
            <span>02</span>
            <strong>Negro profundo</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
