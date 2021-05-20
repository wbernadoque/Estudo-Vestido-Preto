export default function selos() {
  function render() {
    const largura = window.innerWidth;
    const selos = document.querySelectorAll('div.selo');

    if (largura > 456 && largura < 860) {
      selos.forEach((item, index) => {
        if (index <= 1) {
          item.classList.add('ativo');
        } else {
          item.classList.remove('ativo');
        }
      });
      botoesNav(2);
    } else if (largura >= 846) {
      selos.forEach((item, index) => {
        item.classList.add('ativo');
      });
      botoesNav(1);
    } else if (largura <= 456) {
      selos.forEach((item, index) => {
        if (index === 0) {
          item.classList.add('ativo');
        } else {
          item.classList.remove('ativo');
        }
      });
      botoesNav(4);
    }
  }

  function botoesNav(bolinhas) {
    const navSelos = document.querySelector('.nav-selos');
    const botoes = navSelos.querySelectorAll('a');
    botoes.forEach((item) => {
      navSelos.removeChild(item);
    });

    if (bolinhas === 1) {
      const a = document.createElement('a');
      a.classList.add('desativado');
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
    } else if (bolinhas === 4) {
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
    eventoBotao();
  }
  function eventoBotao() {
    const botoes = document.querySelectorAll('.nav-selos a');
    const selos = document.querySelectorAll('.selos .selo');

    botoes.forEach((item, index) => {
      item.addEventListener('click', () => {
        botoes.forEach((item) => {
          item.classList.add('inativo');
          item.classList.remove('ativo');
        });
        // if(botoes.length)

        item.classList.add('ativo');
        item.classList.remove('inativo');

        if (botoes.length === 2) {
          if (index === 0) {
            selos.forEach((item, index) => {
              if (index <= 1) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          } else {
            selos.forEach((item, index) => {
              if (index > 1) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          }
        } else if (botoes.length === 4) {
          if (index === 0) {
            selos.forEach((item, index) => {
              if (index === 0) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          } else if (index === 1) {
            selos.forEach((item, index) => {
              if (index === 1) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          } else if (index === 2) {
            selos.forEach((item, index) => {
              if (index === 2) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          } else if (index === 3) {
            selos.forEach((item, index) => {
              if (index === 3) {
                item.classList.add('ativo');
              } else {
                item.classList.remove('ativo');
              }
            });
          }
        }
      });
    });
  }
  window.addEventListener('resize', () => {
    render();
  });
  render();
}
