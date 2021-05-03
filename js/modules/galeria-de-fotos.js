export default function galeriaDeFotos() {
  const foto = document.querySelectorAll('.exibicao div');
  let select = document.querySelectorAll('.galeria img');
  const galeria = document.querySelectorAll('.galeria a');
  const buttons = document.querySelectorAll('.interacao a');
  const tamanho = window.innerWidth;
  const medidas = document.querySelector('.medidas-da-modelo');
  function botao(index) {
    let i = 0;
    if (index === 1) {
      foto.forEach((item, index) => {
        if (
          !item.classList.contains('inativo') &&
          !item.classList.contains('interacao')
        ) {
          i = index;
        }
      });

      if (i <= foto.length - 2) {
        foto[i].classList.add('inativo');
        foto[i + 1].classList.remove('inativo');
      } else {
        foto[i].classList.add('inativo');
        foto[i - 3].classList.remove('inativo');
      }
    } else {
      foto.forEach((item, index) => {
        if (
          !item.classList.contains('inativo') &&
          !item.classList.contains('interacao')
        ) {
          i = index;
        }
      });
      if (i === 1) {
        foto[i].classList.add('inativo');
        foto[i + foto.length - 2].classList.remove('inativo');
      } else {
        foto[i].classList.add('inativo');
        foto[i - 1].classList.remove('inativo');
      }
    }
  }
  function mobileGaleria() {
    if (tamanho <= 768) {
      select.forEach((item) => {
        item.classList.add('inativo');
      });
      galeria[0].classList.add('ativo');
    }

    return document.querySelectorAll('.galeria a');
  }
  function ativarFoto(index) {
    foto.forEach((item, index) => {
      if (index > 0) item.classList.add('inativo');
    });
    foto[index + 1].classList.remove('inativo');
  }

  galeria.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      galeria.forEach((item) => {
        item.classList.remove('ativo');
      });
      itemMenu.classList.remove('ativo');
      itemMenu.classList.add('ativo');
      ativarFoto(index);
    });
    itemMenu.classList.remove('ativo');
  });

  buttons.forEach((itemButton, index) => {
    itemButton.addEventListener('click', () => {
      botao(index);
    });
  });
  medidas.addEventListener('click', () => {
    const modelo = document.querySelector('.modelo-veste');
    modelo.classList.toggle('desativado');
  });
  mobileGaleria();
}
