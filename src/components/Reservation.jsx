import { useState } from 'react';

export default function Reservation() {
  const [status, setStatus] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    try {
      localStorage.setItem('primada-interest-preview', JSON.stringify({ ...values, savedAt: new Date().toISOString() }));
      setStatus(`Gracias, ${values.name}. Tu interés se ha guardado en este dispositivo.`);
      form.reset();
    } catch {
      setStatus('No se pudo guardar en este dispositivo. Inténtalo de nuevo desde una ventana normal.');
    }
  };

  return (
    <section className="reservation" id="reserva" aria-labelledby="reservation-title">
      <div className="reservation-copy" data-reveal>
        <p className="eyebrow eyebrow--dark">Edición fundadores</p>
        <h2 id="reservation-title">Tu próximo capítulo<br />comienza aquí.</h2>
        <p>Déjanos tus datos para recibir novedades sobre el lanzamiento de PRIMADA 1496.</p>
      </div>
      <form className="interest-form" onSubmit={onSubmit} noValidate>
        <label><span>Nombre</span><input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required /></label>
        <label><span>Correo electrónico</span><input name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required /></label>
        <button className="button button--gold" type="submit">Quiero estar entre los primeros</button>
        <p className="form-note">Vista previa: tus datos se guardan únicamente en este dispositivo.</p>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
