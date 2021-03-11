export default function scroll() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // const topo = section.offsetTop;
    // console.log(topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
