import { facts } from '../data';

export default function Collection() {
  return (
    <section className="collection" id="coleccion" aria-labelledby="collection-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">La colección</p>
        <h2 id="collection-title">Creado para dejar huella.</h2>
        <p>Una edición fundacional de 33 piezas. Cada una, numerada.</p>
      </div>

      <div className="collection-layout">
        <div className="collection-media" data-reveal>
          <video
            src="/assets/primada-1496-film.mp4"
            aria-label="Película de producto del reloj PRIMADA 1496"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
        <div className="collection-copy" data-reveal>
          <p className="eyebrow">Precisión &amp; carácter</p>
          <h3>Una presencia que<br />no necesita anunciarse.</h3>
          <p>Una caja de 42 mm, acero cepillado y cuero cosido a contraste. Diseñado para sentirse tan preciso como se ve.</p>
          <dl className="facts">
            {facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
          </dl>
          <a className="button button--outline" href="#reserva">Solicitar acceso</a>
        </div>
      </div>
    </section>
  );
}
