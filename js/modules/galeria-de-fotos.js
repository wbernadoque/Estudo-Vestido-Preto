export default function galeriaDeFotos() {
  const foto = document.querySelectorAll('.exibicao div');
  const select = document.querySelectorAll('.galeria img');
  const buttons = document.querySelectorAll('.interacao a');

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
      if (i <= 3) {
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
        foto[i + 3].classList.remove('inativo');
      } else {
        foto[i].classList.add('inativo');
        foto[i - 1].classList.remove('inativo');
      }
    }
  }

  function ativarFoto(index) {
    foto.forEach((item, index) => {
      if (index > 0) item.classList.add('inativo');
    });
    foto[index + 1].classList.remove('inativo');
  }
  select.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      ativarFoto(index);
    });
  });

  buttons.forEach((itemButton, index) => {
    itemButton.addEventListener('click', () => {
      botao(index);
    });
  });
}
