import { useRef, useState } from 'react';

export default function Movement() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="movement" id="movimiento" aria-labelledby="movement-title">
      <div className="movement-film" data-reveal>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/sellita-sw200-exploded.jpeg"
          aria-label="Montaje del movimiento automático Sellita SW200-1"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/assets/sellita-sw200-assembly.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
        <div className="movement-controls">
          <button className="movement-control" type="button" onClick={togglePlayback}>
            <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
            {playing ? 'Pausar' : 'Reproducir'}
          </button>
          <button className="movement-control" type="button" onClick={toggleSound}>
            <span aria-hidden="true">{muted ? '◌' : '●'}</span>
            {muted ? 'Activar sonido' : 'Silenciar'}
          </button>
        </div>
        <p className="movement-caption">El corazón de PRIMADA 1496</p>
      </div>

      <div className="movement-story">
        <div className="movement-copy" data-reveal>
          <p className="eyebrow">Ingeniería suiza</p>
          <h2 id="movement-title">Precisión que puedes ver.</h2>
          <p>En el interior de PRIMADA 1496 trabaja el Sellita SW200-1: un movimiento automático suizo visible a través del fondo de zafiro.</p>
          <dl className="movement-facts" aria-label="Datos del movimiento">
            <div><dt>Calibre</dt><dd>Sellita SW200-1</dd></div>
            <div><dt>Tipo</dt><dd>Automático</dd></div>
            <div><dt>Edición</dt><dd>33 piezas numeradas</dd></div>
          </dl>
        </div>
        <figure className="movement-exploded" data-reveal>
          <img src="/assets/sellita-sw200-exploded.jpeg" alt="Vista explotada del movimiento Sellita SW200-1 de PRIMADA 1496" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
