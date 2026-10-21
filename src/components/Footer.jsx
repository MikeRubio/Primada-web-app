export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/assets/primada-logo.svg" alt="PRIMADA 1496" />
      <p>Una historia que comienza en 1496 y continúa contigo.</p>
      <nav aria-label="Enlaces de pie de página">
        <a href="#coleccion">El reloj</a>
        <a href="#movimiento">El movimiento</a>
        <a href="#historia">Nuestra historia</a>
        <a href="#reserva">Reservar</a>
      </nav>
      <small>© {new Date().getFullYear()} PRIMADA. Todos los derechos reservados.</small>
    </footer>
  );
}
