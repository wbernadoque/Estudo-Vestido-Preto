export default function galeriaDeFotos() {
  const foto = document.querySelectorAll('.exibicao div');
  const select = document.querySelectorAll('.galeria img');
  const buttons = document.querySelectorAll('.interacao a');

  function botao(index) {
    foto.forEach((item, index) => {
      // console.log(foto);
      if (
        !item.classList.contains('inativo') &&
        !item.classList.contains('interacao')
      ) {
        foto[index].classList.add('inativo');
        console.log(foto[index + 1]);
      }
    });
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
  console.log(buttons);
}
