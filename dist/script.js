const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.classList.toggle('is-open', opening);
  document.body.classList.toggle('menu-open', opening);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 28), { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.14 }
);
document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const details = {
  signature: {
    kicker: '01 · Nuestra firma',
    title: 'Una identidad que orienta.',
    copy: 'La rosa de los vientos es el centro visual de PRIMADA: una señal de origen, rumbo y continuidad.',
    image: 'assets/detail-signature.jpeg',
    alt: 'Detalle de la esfera y el emblema PRIMADA'
  },
  crown: {
    kicker: '02 · El carácter',
    title: 'Precisión en cada contacto.',
    copy: 'La corona grabada prolonga la identidad de la esfera hasta el perfil de la caja de acero cepillado.',
    image: 'assets/detail-crown.jpeg',
    alt: 'Detalle de la corona grabada del reloj PRIMADA'
  },
  leather: {
    kicker: '03 · La textura',
    title: 'Hecho para acompañarte.',
    copy: 'Cuero de textura marcada y costura en contraste: una combinación pensada para ganar carácter con el uso.',
    image: 'assets/detail-leather.jpeg',
    alt: 'Detalle de la correa de cuero con costura en contraste'
  }
};

const dialog = document.querySelector('[data-detail-dialog]');
document.querySelectorAll('[data-detail]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = details[button.dataset.detail];
    dialog.querySelector('[data-dialog-kicker]').textContent = detail.kicker;
    dialog.querySelector('[data-dialog-title]').textContent = detail.title;
    dialog.querySelector('[data-dialog-copy]').textContent = detail.copy;
    const image = dialog.querySelector('[data-dialog-image]');
    image.src = detail.image;
    image.alt = detail.alt;
    dialog.showModal();
  });
});
dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});

const form = document.querySelector('[data-interest-form]');
const status = form.querySelector('.form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  try {
    localStorage.setItem('primada-interest-preview', JSON.stringify({ ...values, savedAt: new Date().toISOString() }));
    status.textContent = `Gracias, ${values.name}. Tu interés se ha guardado en este dispositivo.`;
    form.reset();
  } catch {
    status.textContent = 'No se pudo guardar en este dispositivo. Inténtalo de nuevo desde una ventana normal.';
  }
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const parallax = document.querySelector('[data-parallax] img');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight * 1.2) {
      parallax.style.transform = `scale(1.05) translateY(${window.scrollY * 0.035}px)`;
    }
  }, { passive: true });
}
