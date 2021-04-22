export default function scroll() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#');
  const botaoComprar = document.querySelectorAll('.banner a[href^="#');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
  botaoComprar.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
