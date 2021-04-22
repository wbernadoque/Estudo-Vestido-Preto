export default function selos() {
  function render() {
    const largura = window.innerWidth;
    const selos = document.querySelectorAll('div.selo');
    const navSelos = document.querySelector('.nav-selos');

    if (largura < 846 && largura > 614) {
      selos.forEach((item, index) => {
        const a = document.createElement('a');
        if (index <= 1) {
          item.classList.add('ativo');
        } else {
          item.classList.remove('ativo');
        }
        // if (index === 1) {
        //   a.classList.add('ativo');
        //   navSelos.appendChild(a);
        // } else if (index === 3) {
        //   a.classList.add('inativo');
        //   navSelos.appendChild(a);
        // }
      });
      botoesNav(2);
    } else if (largura >= 846) {
      selos.forEach((item) => {
        item.classList.add('ativo');
      });
      botoesNav(1);
    }
  }

  function botoesNav(bolinhas) {
    const navSelos = document.querySelector('.nav-selos');
    const botoes = navSelos.querySelectorAll('a');
    botoes.forEach((item) => {
      navSelos.removeChild(item);
    });
    console.log(bolinhas);
    if (bolinhas === 1) {
      const a = document.createElement('a');
      a.classList.add('ativo');
      navSelos.appendChild(a);
    } else if (bolinhas === 2) {
      for (var i = 0; i <= bolinhas - 1; i++) {
        const a = document.createElement('a');
        if (i == 0) {
          a.classList.add('ativo');
          navSelos.appendChild(a);
        } else {
          a.classList.add('inativo');
          navSelos.appendChild(a);
        }
      }
    }
  }
  window.addEventListener('resize', () => {
    render();
  });
  render();
}
