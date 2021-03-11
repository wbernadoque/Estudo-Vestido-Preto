export default function botoesSelecao() {
  const lista = document.querySelector('.botao');
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
      nome: 'Manga curta',
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

  const decoteReverso = botoesDecote.reverse();
  customizar.querySelectorAll('a').forEach((item, index) => {
    if (item.classList.contains('ativo') && index === 0) {
      decoteReverso.forEach((item) => {
        const botao = document.createElement('a');
        const imagem = document.createElement('img');
        const primeiroFilho = lista.firstChild;
        lista.insertBefore(botao, primeiroFilho);
        imagem.src = item.imagem;
        botao.appendChild(imagem);
        botao.appendChild(document.createTextNode(item.nome));
      });
    } else if (!item.classList.contains('ativo') && index === 0) {
    }
  });

  lista.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      } else {
        item.classList.add('ativo');
        vestido.decote = item.childNodes[1].nodeValue;
        console.log(vestido);
      }
    });
  });
}
