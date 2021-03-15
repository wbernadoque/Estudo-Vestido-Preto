export default function botoesSelecao() {
  const botoes = document.querySelector('.botao');
  const customizar = document.querySelector('.customizar');
  const vestido = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
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
  const botoesCustomizarNode = customizar.querySelectorAll('a');
  const botoesCustomizar = Array.from(botoesCustomizarNode);

  function verificarAtivo() {
    const ativo = document.querySelectorAll('.customizar a');
    while (botoes.firstChild) {
      // remove os botoes que não estao ativos

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
          const tamanho = document.createElement('p');
          const primeiroFilho = botoes.firstChild;
          botoes.insertBefore(botao, primeiroFilho);

          botao.appendChild(document.createTextNode(item));

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
    customizar.querySelectorAll('a').forEach((item, index) => {
      item.addEventListener('click', () => {
        if (
          item.classList.contains('selecionavel') ||
          item.classList.contains('selecionado')
        ) {
          item.classList.add('ativo');
          item.classList.remove('selecionavel');

          if (index != 0) {
            customizar
              .querySelectorAll('a')
              [index - 1].classList.remove('ativo');
            customizar
              .querySelectorAll('a')
              [index - 1].classList.add('selecionado');
          }

          verificarAtivo();
        }
      });
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
              console.log(vestido);
            } else if (index == 1) {
              vestido.manga = item.childNodes[1].nodeValue;
              console.log(vestido);
            } else if (index == 2) {
              vestido.comprimento = item.childNodes[1].nodeValue;
              console.log(vestido);
            } else if (index == 3) {
              vestido.tamanho = item.childNodes[0].nodeValue;
              console.log(vestido);
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
  verificarAtivo();
  render();
}
