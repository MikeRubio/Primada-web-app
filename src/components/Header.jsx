import { useEffect, useState } from 'react';

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="PRIMADA, volver al inicio" onClick={closeMenu}>
        <img src="/assets/primada-mark.svg" alt="" />
        <span>PRIMADA</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
      </button>

      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-nav" aria-label="Navegación principal">
        <a href="#coleccion" onClick={closeMenu}>El reloj</a>
        <a href="#movimiento" onClick={closeMenu}>El movimiento</a>
        <a href="#historia" onClick={closeMenu}>Nuestra historia</a>
        <a className="nav-cta" href="#reserva" onClick={closeMenu}>Reservar</a>
      </nav>
    </header>
  );
}
