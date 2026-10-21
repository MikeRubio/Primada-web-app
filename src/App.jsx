import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Collection from './components/Collection';
import { DetailDialog, Details } from './components/Details';
import Movement from './components/Movement';
import Craft from './components/Craft';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="contenido">
        <Hero />
        <Heritage />
        <Collection />
        <Details onSelect={setSelectedDetail} />
        <Movement />
        <Craft />
        <Reservation />
      </main>
      <Footer />
      <DetailDialog detail={selectedDetail} onClose={() => setSelectedDetail(null)} />
    </>
  );
}
