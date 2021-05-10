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
  const botaoX = document.querySelector('.botao-x');
  const finalizarCompraCarrinho = document.querySelector('.carrinho a');
  const menuLateral = document.querySelector('.menu-lateral');
  const botaoCarrinho = document.querySelector('.container-carrinho');
  const tabelaDeMedidas = document.querySelectorAll('.infos div');
  const telaTabela = document.querySelector('.tabela-medidas');
  const fecharTabela = telaTabela.querySelector('.sup .fechar');
  const telaProvador = document.querySelector('.provador-virtual');
  const fecharProvador = telaProvador.querySelector('.sup .fechar');

  const vestido = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
    quantidade: 1,
  };
  const botoesDecote = [
    {
      imagem: 'img/image 1.png',
      nome: 'princesa',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'U',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'gota',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'gola alta',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'gola x',
    },
  ];

  const botoesManga = [
    {
      imagem: 'img/image 1.png',
      nome: 'Alça',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'Manga Curta',
    },
  ];

  const botoesComprimento = [
    {
      imagem: 'img/image 1.png',
      nome: 'Curto',
    },
    {
      imagem: 'img/image 1.png',
      nome: 'Longo',
    },
  ];
  const tamanho = ['p', 'm', 'g', 'gg'];

  const tamanhoReverso = tamanho.reverse();
  const comprimentoReverso = botoesComprimento.reverse();
  const decoteReverso = botoesDecote.reverse();
  const mangaReverso = botoesManga.reverse();
  // const botoesCustomizar = Array.from(botoesCustomizarNode);

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
            } else if (index == 1) {
              vestido.manga = item.childNodes[1].nodeValue;
            } else if (index == 2) {
              vestido.comprimento = item.childNodes[1].nodeValue;
            } else if (index == 3) {
              vestido.tamanho = item.querySelector(
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
            }
          }
        });
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

  customizar.querySelectorAll('a').forEach((item) => {
    customizar.querySelectorAll('a').forEach((item) => {
      if (item.classList.contains('selecionado'))
        item.classList.remove('ativo');
    });
    item.addEventListener('click', () => {
      if (item.classList.contains('selecionavel')) {
        item.classList.remove('selecionavel');
        item.classList.add('ativo');
      } else if (item.classList.contains('selecionado')) {
        customizar.querySelectorAll('a').forEach((item) => {
          item.classList.remove('ativo');
          item.classList.remove('selecionavel');
          item.classList.add('selecionado');
        });
        item.classList.remove('selecionado');
        item.classList.add('ativo');
      }

      verificarAtivo();
    });
  });

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
      console.log('deu null');
      console.log(vestido);
      itemsAdicionados.push({
        decote: vestido.decote,
        manga: vestido.manga,
        comprimento: vestido.comprimento,
        tamanho: vestido.tamanho,
        quantidade: vestido.quantidade,
      });
      console.log(itemsAdicionados);
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
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const overlay = document.querySelector('.overlay-menu');
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
  itemsNoCarrinho();
  quantidadeBadge();
  verificarAtivo();
  render();
}
