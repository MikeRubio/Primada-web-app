import { useEffect, useRef } from 'react';
import { details } from '../data';

export function Details({ onSelect }) {
  return (
    <section className="details" id="detalles" aria-labelledby="details-title">
      <div className="section-heading section-heading--center" data-reveal>
        <p className="eyebrow">El objeto</p>
        <h2 id="details-title">Acércate a los detalles.</h2>
      </div>

      <div className="detail-grid">
        {details.map((detail) => (
          <button className="detail-card" type="button" key={detail.id} onClick={() => onSelect(detail)} data-reveal>
            <span className="detail-image"><img src={detail.image} alt={detail.alt} loading="lazy" /></span>
            <span className="detail-index">{detail.index}</span>
            <strong>{detail.label}</strong>
            <small>{detail.cardCopy}</small>
            <i aria-hidden="true">Ver detalle ↗</i>
          </button>
        ))}
      </div>
    </section>
  );
}

export function DetailDialog({ detail, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (detail && dialog && !dialog.open) dialog.showModal();
  }, [detail]);

  const close = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <dialog
      className="detail-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => { if (event.target === dialogRef.current) close(); }}
    >
      <button className="dialog-close" type="button" onClick={close} aria-label="Cerrar">×</button>
      {detail && (
        <>
          <img src={detail.image} alt={detail.alt} />
          <div>
            <p className="eyebrow">{detail.kicker}</p>
            <h2>{detail.title}</h2>
            <p>{detail.copy}</p>
          </div>
        </>
      )}
    </dialog>
  );
}
