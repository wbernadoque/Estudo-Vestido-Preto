export default function galeriaDeFotos() {
  const foto = document.querySelectorAll('.exibicao div');
  let select = document.querySelectorAll('.galeria img');
  // const galeria = document.querySelectorAll('.galeria a');
  // const buttons = document.querySelectorAll('.interacao a');

  const tamanho = window.innerWidth;
  let selecoes = document.querySelectorAll('#produto .info .botao a');
  const info = document.querySelector('#produto .info .botao');
  const customizacao = document.querySelectorAll(
    '#produto .info .customizar a'
  );
  const medidas = document.querySelector('.medidas-da-modelo');
  const vestidos = [
    {
      tipo: 1,
      decote: 'princesa',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 2,
      decote: 'princesa',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 3,
      decote: 'princesa',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 4,
      decote: 'princesa',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 5,
      decote: 'U',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 6,
      decote: 'U',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 7,
      decote: 'U',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 8,
      decote: 'U',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 9,
      decote: 'gota',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 10,
      decote: 'gota',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 11,
      decote: 'gota',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 12,
      decote: 'gota',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 13,
      decote: 'gola',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 14,
      decote: 'gola',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 15,
      decote: 'gola',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 16,
      decote: 'gola',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 17,
      decote: 'x',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 18,
      decote: 'x',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 19,
      decote: 'x',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 20,
      decote: 'x',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
  ];
  const fotosTipo = [
    {
      tipo: 1,
      img: '',
    },
    {
      tipo: 2,
      img: '',
    },
    {
      tipo: 3,
      img: '',
    },
    {
      tipo: 4,
      img: '',
    },
    {
      tipo: 5,
      img: '',
    },
    {
      tipo: 6,
      img: '',
    },
    {
      tipo: 7,
      img: '',
    },
    {
      tipo: 8,
      img: '',
    },
    {
      tipo: 9,
      img: '',
    },
    {
      tipo: 10,
      img: '',
    },
    {
      tipo: 11,
      img: '',
    },
    {
      tipo: 12,
      img: '',
    },
    {
      tipo: 13,
      img: '',
    },
    {
      tipo: 14,
      img: '',
    },
    {
      tipo: 15,
      img: '',
    },
    {
      tipo: 16,
      img: '',
    },
    {
      tipo: 17,
      img: '',
    },
    {
      tipo: 18,
      img: '',
    },
    {
      tipo: 19,
      img: '',
    },
    {
      tipo: 20,
      img: '',
    },
  ];
  let estado = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
  };

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
  //identificando fotos
  function alterarGaleria() {
    const exibicao = document.querySelector('#produto .foto .exibicao');
    const menu = document.querySelector('#produto .foto .galeria');
    const fotos = document.querySelectorAll('#produto .foto .exibicao div');
    const galeria = document.querySelectorAll('#produto .foto .galeria a');

    vestidos.forEach((item) => {
      if (
        estado.decote === item.decote &&
        estado.manga === item.manga &&
        estado.comprimento === item.comprimento
      ) {
        // console.log(item);
        if (item.tipo === 1) {
          // fotos
          fotos.forEach((foto, index) => {
            if (index > 0) {
              exibicao.removeChild(foto);
            }
            // for (var i = 0; i < 5; i++) {
            const divFoto = document.createElement('div');
            const fotoInserir = document.createElement('img');
            if (index !== 0) {
              divFoto.classList.add('inativo');
            }
            fotoInserir.src =
              'img/tipo-' + item.tipo + '/' + (index + 1) + '.png';

            divFoto.appendChild(fotoInserir);
            exibicao.appendChild(divFoto);
            // }
          });
          galeria.forEach((foto, index) => {
            if (index >= 0) {
              menu.removeChild(foto);
            }
            // for (var i = 0; i < 5; i++) {
            const divFoto = document.createElement('a');
            const fotoInserir = document.createElement('img');

            fotoInserir.src =
              'img/tipo-' + item.tipo + '/' + (index + 1) + '.png';

            divFoto.appendChild(fotoInserir);
            menu.appendChild(divFoto);
            // }
          });
        }
        if (item.tipo === 2) {
          console.log(item.tipo);
        }
        if (item.tipo === 3) {
          console.log(item.tipo);
        }
        if (item.tipo === 4) {
          console.log(item.tipo);
        }
      }
    });
    render();
  }
  function render() {
    const galeria = document.querySelectorAll('#produto .galeria a');
    const buttons = document.querySelectorAll('#produto .interacao a');
    galeria.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        console.log('passei aqui');
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
  }

  medidas.addEventListener('click', () => {
    const modelo = document.querySelector('.modelo-veste');
    modelo.classList.toggle('desativado');
  });

  mobileGaleria();

  info.addEventListener('click', () => {
    const estadoGravado = JSON.parse(localStorage.getItem('selecao'));
    estado = estadoGravado;
    console.log(estado);
    alterarGaleria();
    render();
  });
  render();
}
