import { useRef, useState } from 'react';

const BREVO_FORM_ACTION = 'https://1da014f7.sibforms.com/serve/MUIFABBO-PkNqLWZWfsGewK0t6gnwhL14hP92cx8LbKK4YLGEWJS2ZyuU_68mLy5fxv5N3Kr54RusDZxETmv2sEycWZDxHRCtuJG7NDbhfVVqTqdQuvdIXkyx755kpRY2N44g7EljQXtdtZwjU9_Jq5fzNfmV2YW-p9UCPeU82Kkec0JZAc8XrR14hVJdGbvUT6Z7FxZQ4N5CUMNag==';

export default function Reservation() {
  const formRef = useRef(null);
  const submissionPending = useRef(false);
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event) => {
    if (!event.currentTarget.reportValidity()) {
      event.preventDefault();
      return;
    }

    submissionPending.current = true;
    setSubmitting(true);
    setStatus('Enviando tu solicitud…');
  };

  const onSubmissionComplete = () => {
    if (!submissionPending.current) return;
    submissionPending.current = false;
    formRef.current?.reset();
    setSubmitting(false);
    setStatus('Revisa tu correo. Te hemos enviado un enlace para confirmar tu suscripción.');
  };

  return (
    <section className="reservation" id="reserva" aria-labelledby="reservation-title">
      <div className="reservation-copy" data-reveal>
        <p className="eyebrow eyebrow--dark">Edición fundadores</p>
        <h2 id="reservation-title">Sé parte<br />del comienzo.</h2>
        <p>Recibe en tu correo las novedades sobre el lanzamiento de PRIMADA 1496.</p>
      </div>
      <form
        ref={formRef}
        className="interest-form"
        method="POST"
        action={BREVO_FORM_ACTION}
        target="brevo-submission"
        acceptCharset="UTF-8"
        onSubmit={onSubmit}
        data-reveal
      >
        <label className="form-field">
          <span>Correo electrónico</span>
          <input name="EMAIL" type="email" autoComplete="email" placeholder="tu@correo.com" required />
        </label>

        <label className="consent-field">
          <input name="OPT_IN" type="checkbox" value="1" required />
          <span>Quiero recibir novedades sobre PRIMADA, el lanzamiento del modelo 1496 y futuras ediciones. Puedo darme de baja en cualquier momento.</span>
        </label>

        <p className="privacy-note">
          Utilizamos Brevo para gestionar estas comunicaciones siguiendo nuestras instrucciones.{' '}
          <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank" rel="noreferrer">Consulta su política de privacidad.</a>
        </p>

        <button className="button button--gold" type="submit" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Quiero estar entre los primeros'}
        </button>

        <input className="brevo-honeypot" type="text" name="email_address_check" value="" readOnly tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="locale" value="es" />
        <input type="hidden" name="html_type" value="simple" />
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form>

      <iframe
        className="brevo-submission-frame"
        name="brevo-submission"
        title="Confirmación de suscripción"
        onLoad={onSubmissionComplete}
        aria-hidden="true"
        tabIndex="-1"
      />
    </section>
  );
}
