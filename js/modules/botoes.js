export default function botoesSelecao() {
  const quantidade = document.querySelectorAll('.quantidade a');
  const itemsAdicionados = new Array();
  let quantidadeValor;
  const botoes = document.querySelector('.botao');
  const customizar = document.querySelector('.customizar');
  const botaoComprar = document.querySelector('.comprar');
  const carrinho = document.querySelector('.carrinho');
  const containerCarrinho = carrinho.querySelector('.container');
  const botaoMenu = document.querySelector('.botao-menu');
  const overlay = document.querySelector('.overlay-menu');
  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const botaoX = document.querySelector('.botao-x');
  const finalizarCompraCarrinho = document.querySelector('.carrinho a');
  const menuLateral = document.querySelector('.menu-lateral');
  const botoesNav = menuLateral.querySelectorAll('ul li');
  const botaoCarrinho = document.querySelector('.container-carrinho');
  const tabelaDeMedidas = document.querySelectorAll('.infos div');
  const telaTabela = document.querySelector('.tabela-medidas');
  const fecharTabela = telaTabela.querySelector('.sup .fechar');
  const telaProvador = document.querySelector('.provador-virtual');
  const fecharProvador = telaProvador.querySelector('.sup .fechar');
  const botoesTabela = document.querySelectorAll('.botoes-tabela a');
  const tamanho = ['p', 'm', 'g', 'gg'];

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
  const vestido = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
    quantidade: 1,
  };
  const botoesDecote = [
    {
      imagem: 'img/princesa.png',
      nome: 'princesa',
    },
    {
      imagem: 'img/u.png',
      nome: 'U',
    },
    {
      imagem: 'img/gota.png',
      nome: 'gota',
    },
    {
      imagem: 'img/gola.png',
      nome: 'gola alta',
    },
    {
      imagem: 'img/x1.png',
      nome: 'gola x',
    },
  ];
  const botoesManga = [
    {
      imagem: 'img/alca.png',
      nome: 'Alça',
    },
    {
      imagem: 'img/manga.png',
      nome: 'Manga Longa',
    },
  ];
  const botoesComprimento = [
    {
      imagem: 'img/curto.png',
      nome: 'Curto',
    },
    {
      imagem: 'img/longo.png',
      nome: 'Longo',
    },
  ];
  const comprimentoReverso = botoesComprimento.reverse();
  const tamanhoReverso = tamanho.reverse();

  const decoteReverso = botoesDecote.reverse();
  const mangaReverso = botoesManga.reverse();
  localStorage.setItem('selecao', JSON.stringify(vestido));

  function quantidadeBadge() {
    const itemsCarrinhoMemoria = JSON.parse(localStorage.getItem('item'));

    const span = document.querySelector('.badge span');
    const badge = document.querySelector('.badge');

    if (!itemsCarrinhoMemoria) {
    } else {
      badge.classList.add('ativo');
      span.innerHTML = itemsCarrinhoMemoria.length;
    }
  }
  function verificarAtivo() {
    const ativo = document.querySelectorAll('.customizar a');

    // remove os botoes que não estao ativos
    while (botoes.firstChild) {
      botoes.removeChild(botoes.firstChild);
    }
    ativo.forEach((item, index) => {
      if (index === 0 && item.classList.contains('ativo')) {
        decoteReverso.forEach((item) => {
          const botao = document.createElement('a');
          const imagem = document.createElement('img');
          const primeiroFilho = botoes.firstChild;
          botoes.insertBefore(botao, primeiroFilho);
          imagem.src = item.imagem;
          botao.appendChild(imagem);
          botao.appendChild(document.createTextNode(item.nome));
          if (item.nome == vestido.decote) {
            botao.classList.add('ativo');
          }
        });
      } else if (index === 1 && item.classList.contains('ativo')) {
        mangaReverso.forEach((item) => {
          const botao = document.createElement('a');
          const imagem = document.createElement('img');
          const primeiroFilho = botoes.firstChild;
          botoes.insertBefore(botao, primeiroFilho);
          imagem.src = item.imagem;
          botao.appendChild(imagem);
          botao.appendChild(document.createTextNode(item.nome));
          if (item.nome == vestido.manga) {
            botao.classList.add('ativo');
          }
        });
      } else if (index === 2 && item.classList.contains('ativo')) {
        comprimentoReverso.forEach((item) => {
          const botao = document.createElement('a');
          const imagem = document.createElement('img');
          const primeiroFilho = botoes.firstChild;
          botoes.insertBefore(botao, primeiroFilho);
          imagem.src = item.imagem;
          botao.appendChild(imagem);
          botao.appendChild(document.createTextNode(item.nome));
          if (item.nome == vestido.comprimento) {
            botao.classList.add('ativo');
          }
        });
      } else if (index === 3 && item.classList.contains('ativo')) {
        tamanhoReverso.forEach((item) => {
          const botao = document.createElement('a');
          botao.style.fontSize = 18 + 'px';
          const primeiroFilho = botoes.firstChild;
          botoes.insertBefore(botao, primeiroFilho);
          const span = document.createElement('span');
          span.appendChild(document.createTextNode(item));
          botao.appendChild(span);

          if (item == vestido.tamanho) {
            botao.classList.add('ativo');
          }
        });
      }
    });
    render();
  }
  function render() {
    const botoes = document.querySelector('.botao');
    customizar.querySelectorAll('a').forEach((item) => {
      if (item.classList.contains('selecionado'))
        item.classList.remove('ativo');
    });

    botoes.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', () => {
        botoes.querySelectorAll('a').forEach((item) => {
          item.classList.remove('ativo');
        });
        item.classList.add('ativo');
        // liberar botoes para trocar de customização
        customizar.querySelectorAll('a').forEach((custom, index) => {
          if (custom.classList.contains('ativo')) {
            if (index == 0) {
              vestido.decote = item.childNodes[1].nodeValue;
              estado.decote = item.childNodes[1].nodeValue;
            } else if (index == 1) {
              vestido.manga = item.childNodes[1].nodeValue;
              estado.manga = item.childNodes[1].nodeValue;
            } else if (index == 2) {
              vestido.comprimento = item.childNodes[1].nodeValue;
              estado.comprimento = item.childNodes[1].nodeValue;
            } else if (index == 3) {
              vestido.tamanho = item.querySelector(
                'span'
              ).childNodes[0].nodeValue;
              estado.tamanho = item.querySelector(
                'span'
              ).childNodes[0].nodeValue;
            }

            if (
              vestido.comprimento.length > 0 &&
              vestido.decote.length > 0 &&
              vestido.manga.length > 0 &&
              vestido.tamanho.length > 0
            ) {
              document.querySelector('.comprar').classList.add('ativo');
              document.querySelector('.comprar').removeAttribute('disabled');
            }
            customizar.querySelectorAll('a')[index].classList.remove('ativo');
            customizar
              .querySelectorAll('a')
              [index].classList.add('selecionado');

            if (index != 3) {
              customizar
                .querySelectorAll('a')
                [index + 1].classList.add('selecionavel');
              if (
                !customizar
                  .querySelectorAll('a')
                  [index + 1].classList.contains('selecionado')
              ) {
                if (index + 1 === 1) {
                  customizar
                    .querySelectorAll('a')
                    [index + 1].querySelector('img').src =
                    'img/manga-selecionavel.png';
                } else if (index + 1 === 2) {
                  customizar
                    .querySelectorAll('a')
                    [index + 1].querySelector('img').src =
                    'img/comprimento-selecionavel.png';
                } else if (index + 1 === 3) {
                  customizar
                    .querySelectorAll('a')
                    [index + 1].querySelector('img').src =
                    'img/tamanho-selecionavel.png';
                }
              }
            }
          }
        });
        localStorage.setItem('selecao', JSON.stringify(estado));
        // alterarGaleria();
      });
    });
  }

  function itemsNoCarrinho() {
    containerCarrinho.querySelectorAll('.item').forEach((item) => {
      containerCarrinho.removeChild(item);
    });
    const itemsCarrinhoMemoria = JSON.parse(localStorage.getItem('item'));
    if (itemsCarrinhoMemoria === null) {
    } else {
      itemsCarrinhoMemoria.forEach((itemsCarrinhoMemoria) => {
        const item = document.createElement('div');
        item.classList.add('item');
        const imagem = document.createElement('img');
        const detalhes = document.createElement('div');
        const titulo = document.createElement('h1');
        titulo.appendChild(document.createTextNode('Vestido Preto One'));
        const decote = document.createElement('span');
        const manga = document.createElement('span');
        const comprimento = document.createElement('span');
        const tamanho = document.createElement('span');
        imagem.src = 'img/imagem-carrinho.png';

        item.appendChild(imagem);

        detalhes.classList.add('detalhes');

        detalhes.appendChild(titulo);

        decote.appendChild(
          document.createTextNode('Decote: ' + itemsCarrinhoMemoria.decote)
        );
        detalhes.appendChild(decote);

        manga.appendChild(
          document.createTextNode('Manga: ' + itemsCarrinhoMemoria.manga)
        );
        detalhes.appendChild(manga);

        comprimento.appendChild(
          document.createTextNode(
            'Comprimento: ' + itemsCarrinhoMemoria.comprimento
          )
        );
        detalhes.appendChild(comprimento);

        tamanho.appendChild(
          document.createTextNode('Tamanho: ' + itemsCarrinhoMemoria.tamanho)
        );
        detalhes.appendChild(tamanho);
        item.appendChild(detalhes);

        // carrinho.appendChild(item);
        containerCarrinho.appendChild(item);
        finalizarCompraCarrinho.remove();
        carrinho.appendChild(finalizarCompraCarrinho);
        vestido.decote = '';
        vestido.manga = '';
        vestido.comprimento = '';
        vestido.tamanho = '';

        botaoComprar.setAttribute('disabled', 'disabled');
        botaoComprar.classList.remove('ativo');
      });
    }
    quantidadeBadge();

    verificarAtivo();
  }

  customizar.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', () => {
      // item.classList.add('ativo');
      if (item.classList.contains('selecionavel')) {
        item.classList.remove('selecionavel');
        item.classList.add('ativo');

        teste(index);
      } else if (item.classList.contains('selecionado')) {
        item.classList.add('ativo');
        item.classList.remove('selecionado');
        teste(index);
      }

      if (index === 1) {
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/manga-selecionado.png';
      } else if (index === 2) {
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/comprimento-selecionado.png';
      } else if (index === 3) {
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/tamanho-selecionado.png';
      }
    });
  });
  function teste(botao) {
    const customizar = document.querySelector('.customizar');
    const estado = JSON.parse(localStorage.getItem('selecao'));

    customizar.querySelectorAll('a').forEach((item, index) => {
      if (
        index == 0 &&
        estado.decote !== '' &&
        !item.classList.contains('selecionavel')
      ) {
        item.classList.remove('ativo');
        item.classList.remove('selecionavel');
        item.classList.add('selecionado');
      }
      if (
        index == 1 &&
        estado.manga !== '' &&
        !item.classList.contains('selecionavel')
      ) {
        item.classList.remove('ativo');
        item.classList.remove('selecionavel');
        item.classList.add('selecionado');
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/manga-selecionado.png';
      }
      if (
        index == 2 &&
        estado.comprimento !== '' &&
        !item.classList.contains('selecionavel')
      ) {
        item.classList.remove('ativo');
        item.classList.remove('selecionavel');
        item.classList.add('selecionado');
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/comprimento-selecionado.png';
      }
      if (
        index == 3 &&
        estado.tamanho !== '' &&
        !item.classList.contains('selecionavel')
      ) {
        item.classList.remove('ativo');
        item.classList.remove('selecionavel');
        item.classList.add('selecionado');
        customizar.querySelectorAll('a')[index].querySelector('img').src =
          'img/tamanho-selecionado.png';
      }
      if (botao === index) {
        item.classList.remove('selecionado');
        item.classList.add('ativo');
      }
      if (botao !== index) {
        // item.classList.add('selecionavel');
        item.classList.remove('ativo');
      }
      customizar.querySelectorAll('a').forEach((item, index) => {
        if (item.classList.value === '') {
          if (index === 1) {
            customizar.querySelectorAll('a')[index].querySelector('img').src =
              'img/manga-.svg';
          } else if (index === 2) {
            customizar.querySelectorAll('a')[index].querySelector('img').src =
              'img/comprimento-.svg';
          } else if (index === 3) {
            customizar.querySelectorAll('a')[index].querySelector('img').src =
              'img/tamanho-.svg';
          }
        }
      });
      verificarAtivo();
    });
  }
  quantidade.forEach((item) => {
    item.addEventListener('click', () => {
      let valor = parseInt(quantidade[1].innerHTML);
      if (item.classList.contains('menos') && valor > 1) {
        quantidadeValor = document.querySelector('.valor').innerHTML =
          valor - 1;
        vestido.quantidade = quantidadeValor;
      } else if (item.classList.contains('mais')) {
        quantidadeValor = document.querySelector('.valor').innerHTML =
          valor + 1;
        vestido.quantidade = quantidadeValor;
      }
    });
  });

  //inserir produto no carrinho
  botaoComprar.addEventListener('click', () => {
    const itemsCarrinhoMemoria = JSON.parse(localStorage.getItem('item'));

    if (itemsCarrinhoMemoria === null) {
      itemsAdicionados.push({
        decote: vestido.decote,
        manga: vestido.manga,
        comprimento: vestido.comprimento,
        tamanho: vestido.tamanho,
        quantidade: vestido.quantidade,
      });

      localStorage.setItem('item', JSON.stringify(itemsAdicionados));
    } else {
      itemsCarrinhoMemoria.push({
        decote: vestido.decote,
        manga: vestido.manga,
        comprimento: vestido.comprimento,
        tamanho: vestido.tamanho,
        quantidade: vestido.quantidade,
      });
      localStorage.setItem('item', JSON.stringify(itemsCarrinhoMemoria));
    }

    customizar.querySelectorAll('a').forEach((item, index) => {
      if (index === 0) {
        item.classList.remove('selecionado');
        item.classList.add('ativo');
      } else {
        item.classList.remove('selecionado');
        item.classList.remove('selecionavel');
      }
    });

    render();

    finalizarCompraCarrinho.remove();
    carrinho.appendChild(finalizarCompraCarrinho);
    vestido.decote = '';
    vestido.manga = '';
    vestido.comprimento = '';
    vestido.tamanho = '';

    botaoComprar.setAttribute('disabled', 'disabled');
    botaoComprar.classList.remove('ativo');
    quantidadeBadge();
    itemsNoCarrinho();
    verificarAtivo();
  });

  botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.toggle('ativo');
  });

  botaoMenu.addEventListener('click', () => {
    overlay.classList.toggle('ativo');
    menuHamburguer.classList.toggle('inativo');
    menuLateral.classList.add('ativo');
  });
  botaoX.addEventListener('click', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const overlay = document.querySelector('.overlay-menu');
    overlay.classList.toggle('ativo');
    menuLateral.classList.remove('ativo');
    menuHamburguer.classList.toggle('inativo');
  });

  tabelaDeMedidas[1].addEventListener('click', () => {
    telaTabela.classList.add('ativo');
  });
  fecharTabela.addEventListener('click', () => {
    telaTabela.classList.remove('ativo');
  });
  tabelaDeMedidas[0].addEventListener('click', () => {
    telaProvador.classList.add('ativo');
  });
  fecharProvador.addEventListener('click', () => {
    telaProvador.classList.remove('ativo');
  });

  botoesTabela[0].addEventListener('click', () => {
    telaTabela.classList.remove('ativo');
    telaProvador.classList.add('ativo');
  });

  botoesNav[0].addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    overlay.classList.remove('ativo');
    menuHamburguer.classList.remove('inativo');
  });
  botoesNav[1].addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    overlay.classList.remove('ativo');
    menuHamburguer.classList.remove('inativo');
  });
  botoesNav[2].addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    overlay.classList.remove('ativo');
    menuHamburguer.classList.remove('inativo');
  });

  itemsNoCarrinho();
  quantidadeBadge();
  verificarAtivo();
  render();
}
