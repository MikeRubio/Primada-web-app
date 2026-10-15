export default function Craft() {
  return (
    <>
      <section className="craft" aria-labelledby="craft-title">
        <div className="craft-image" data-reveal>
          <img src="/assets/founders-edition-board.jpeg" alt="PRIMADA Founders Edition y sus detalles técnicos" loading="lazy" />
        </div>
        <div className="craft-copy" data-reveal>
          <p className="eyebrow eyebrow--dark">Ingeniería suiza</p>
          <h2 id="craft-title">Precisión que se revela con el tiempo.</h2>
          <p>Bajo el acero, un movimiento automático. Sobre él, una composición hecha para leerse con claridad y recordarse por su carácter.</p>
          <div className="edition-mark"><span>33</span><p><b>Piezas numeradas</b><br />Founders Edition</p></div>
        </div>
      </section>

      <section className="origin" aria-labelledby="origin-title">
        <img src="/assets/cathedral-sketch.jpeg" alt="Ilustración de la Catedral Primada de América" loading="lazy" />
        <div data-reveal>
          <p className="eyebrow eyebrow--dark">La inspiración</p>
          <h2 id="origin-title">Un origen que llevamos contigo.</h2>
          <p>1496 evoca nuestras raíces en Santo Domingo. Una historia que inspira nuestro primer modelo.</p>
        </div>
      </section>
    </>
  );
}
