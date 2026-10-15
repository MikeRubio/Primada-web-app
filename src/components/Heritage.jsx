export default function Heritage() {
  return (
    <section className="heritage" id="historia" aria-labelledby="heritage-title">
      <div className="heritage-art" data-reveal>
        <img src="/assets/heritage-story.png" alt="Ilustración histórica de navíos, mapas y la catedral de Santo Domingo" />
        <span className="art-caption">Santo Domingo · 1496</span>
      </div>
      <div className="heritage-copy" data-reveal>
        <p className="eyebrow eyebrow--dark">Nuestra historia</p>
        <h2 id="heritage-title">El origen de<br />nuestro nombre.</h2>
        <p className="lead">PRIMADA nace de una conexión con Santo Domingo: su historia, su carácter y su lugar en la memoria del continente.</p>
        <p>Nuestro primer modelo, 1496, evoca el año tradicionalmente asociado a la fundación de la ciudad. La Catedral Primada de América inspira un nombre que lleva nuestras raíces al presente.</p>
        <p className="signature">Una historia que seguimos escribiendo.</p>
        <a className="text-link" href="#coleccion">Descubrir PRIMADA 1496 <span>→</span></a>
      </div>
    </section>
  );
}
