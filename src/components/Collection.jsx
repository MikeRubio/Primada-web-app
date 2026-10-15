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
        <div className="collection-portrait" data-reveal>
          <img src="/assets/watch-chronograph.jpeg" alt="Cronógrafo PRIMADA con esfera antracita y correa de cuero marrón" loading="lazy" />
          <div className="portrait-tag"><span>01</span><small>Dos expresiones de una misma identidad</small></div>
        </div>
        <div className="collection-copy" data-reveal>
          <p className="eyebrow">Precisión &amp; carácter</p>
          <h3>Una presencia que<br />no necesita anunciarse.</h3>
          <p>Proporciones equilibradas, acero cepillado y cuero cosido a contraste. Diseñado para sentirse tan preciso como se ve.</p>
          <dl className="facts">
            {facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
          </dl>
          <a className="button button--outline" href="#reserva">Solicitar acceso</a>
        </div>
      </div>
    </section>
  );
}
