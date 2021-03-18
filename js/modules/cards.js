export default function cards() {
  const pessoas = document.querySelector('.pessoas');

  const botoes = document.querySelector('.nav');

  const clientes = [
    {
      foto: 'img/image 3.png',
      estrelas: 4,
      nome: 'Raine Gonçalves',
      compra: {
        decote: 'Alta',
        botoesManga: 'Longa',
        botoesComprimento: 'Curto',
        tamanho: 'P',
      },
      descricao:
        '“Eu estou simplesmente apaixonada pelo meu vestido preto, que de básico, não tem nada! Conheci a loja através do instagram e me apaixonei pela ideia de ter um vestido preto que se adequa a diversas ocasiões. O produto chegou na minha casa dentro do prazo, fiquei encantada com o cuidado com que o vestido é embalado e adorei saber que eles se preocupam com o meio ambiente.O provador virtual me ajudou a escolher o tamanho perfeito.”',
    },
    {
      foto: 'img/image 4.png',
      estrelas: 5,
      nome: 'Ismarina Fernandes',
      compra: {
        decote: 'princesa',
        botoesManga: 'Curta',
        botoesComprimento: 'longo',
        tamanho: 'M',
      },
      descricao: '“Gostei muito do meu vestido preto. “',
    },
    {
      foto: 'img/image 5.png',
      estrelas: 4,
      nome: 'Thamyres',
      compra: {
        decote: 'Alta',
        botoesManga: 'Longa',
        botoesComprimento: 'Curto',
        tamanho: 'G',
      },
      descricao:
        '“O vestido é muito maravilhoso, eu tive problemas ao escolher o tamanho mas a loja foi muito atenciosa e o processo de troca foi descomplicado. Agora estou com o tamanho certo e o caimento ficou perfeito.Com certeza indico a Vestido preto e voltarei a fazer compras!”',
    },
    {
      foto: 'img/image 3.png',
      estrelas: 4,
      nome: 'Raine Gonçalves 1',
      compra: {
        decote: 'Alta',
        botoesManga: 'Longa',
        botoesComprimento: 'Curto',
        tamanho: 'P',
      },
      descricao:
        '“Eu estou simplesmente apaixonada pelo meu vestido preto, que de básico, não tem nada! Conheci a loja através do instagram e me apaixonei pela ideia de ter um vestido preto que se adequa a diversas ocasiões. O produto chegou na minha casa dentro do prazo, fiquei encantada com o cuidado com que o vestido é embalado e adorei saber que eles se preocupam com o meio ambiente.O provador virtual me ajudou a escolher o tamanho perfeito.”',
    },
    {
      foto: 'img/image 4.png',
      estrelas: 5,
      nome: 'Ismarina Fernandes 1',
      compra: {
        decote: 'princesa',
        botoesManga: 'Curta',
        botoesComprimento: 'longo',
        tamanho: 'M',
      },
      descricao: '“Gostei muito do meu vestido preto. “',
    },
    {
      foto: 'img/image 5.png',
      estrelas: 4,
      nome: 'Thamyres 1',
      compra: {
        decote: 'Alta',
        botoesManga: 'Longa',
        botoesComprimento: 'Curto',
        tamanho: 'G',
      },
      descricao:
        '“O vestido é muito maravilhoso, eu tive problemas ao escolher o tamanho mas a loja foi muito atenciosa e o processo de troca foi descomplicado. Agora estou com o tamanho certo e o caimento ficou perfeito.Com certeza indico a Vestido preto e voltarei a fazer compras!”',
    },
    {
      foto: 'img/image 3.png',
      estrelas: 4,
      nome: 'Raine Gonçalves 2',
      compra: {
        decote: 'Alta',
        botoesManga: 'Longa',
        botoesComprimento: 'Curto',
        tamanho: 'P',
      },
      descricao:
        '“Eu estou simplesmente apaixonada pelo meu vestido preto, que de básico, não tem nada! Conheci a loja através do instagram e me apaixonei pela ideia de ter um vestido preto que se adequa a diversas ocasiões. O produto chegou na minha casa dentro do prazo, fiquei encantada com o cuidado com que o vestido é embalado e adorei saber que eles se preocupam com o meio ambiente.O provador virtual me ajudou a escolher o tamanho perfeito.”',
    },
    {
      foto: 'img/image 4.png',
      estrelas: 5,
      nome: 'Ismarina Fernandes 2',
      compra: {
        decote: 'princesa',
        botoesManga: 'Curta',
        botoesComprimento: 'longo',
        tamanho: 'M',
      },
      descricao: '“Gostei muito do meu vestido preto. “',
    },
  ];
  const paginas = Math.trunc(clientes.length / 3 - 1) + 1;
  console.log(paginas);

  //criar blocos
  for (let i = 0; i <= paginas; i++) {
    const bloco = document.createElement('div');
    bloco.classList.add('bloco');

    pessoas.appendChild(bloco);
  }

  //criar botoes de paginação
  for (let i = 0; i <= paginas; i++) {
    if (i === 0) {
      const paginacao = document.createElement('a');

      botoes.appendChild(paginacao);
      paginacao.classList.add('ativo');
    } else {
      const paginacao = document.createElement('a');

      botoes.appendChild(paginacao);
      paginacao.classList.add('inativo');
    }
  }
  const blocos = document.querySelectorAll('.bloco');

  function inserirEmBlocos(card, index) {
    if (index <= 2) {
      blocos[0].appendChild(card);
      blocos[0].classList.add('ativo');
      pessoas.appendChild(blocos[0]);
    } else if (index > 2 && index <= 5) {
      blocos[1].appendChild(card);
      blocos[1].classList.add('inativo');
      pessoas.appendChild(blocos[1]);
    } else if (index > 5) {
      blocos[2].appendChild(card);
      blocos[2].classList.add('inativo');
      pessoas.appendChild(blocos[2]);
    }
  }
  clientes.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('ativo');

    const perfil = document.createElement('div');
    perfil.classList.add('perfil');

    const imagem = document.createElement('img');
    imagem.src = item.foto;

    const informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');

    const estrelas = document.createElement('div');
    estrelas.classList.add('estrelas');

    for (var i = 0; i <= 4; i++) {
      if (i < item.estrelas) {
        const estrelaCheia = document.createElement('img');
        estrelaCheia.src = 'img/star (1).svg';
        estrelas.appendChild(estrelaCheia);
      } else {
        const estrelaVazia = document.createElement('img');
        estrelaVazia.src = 'img/star.svg';
        estrelas.appendChild(estrelaVazia);
      }
    }

    const nome = document.createElement('h3');
    nome.appendChild(document.createTextNode(item.nome));

    const descricao = document.createElement('div');
    descricao.classList.add('descricao');
    descricao.appendChild(document.createTextNode(item.descricao));

    const span = document.createElement('span');

    span.appendChild(
      document.createTextNode(
        'Vestido Preto One: Gola ' +
          item.compra.decote +
          ', Manga ' +
          item.compra.botoesManga +
          ', ' +
          item.compra.botoesComprimento +
          ', tamanho ' +
          item.compra.tamanho
      )
    );

    informacoes.appendChild(estrelas);
    informacoes.appendChild(nome);
    informacoes.appendChild(span);

    perfil.appendChild(imagem);
    perfil.appendChild(informacoes);

    card.appendChild(perfil);
    card.appendChild(descricao);

    pessoas.appendChild(card);

    inserirEmBlocos(card, index);
  });

  //botao de navegação
  document.querySelectorAll('.nav a').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav a').forEach((item) => {
        item.classList.remove('ativo');
      });
      item.classList.add('ativo');
      const blocos = document.querySelectorAll('.bloco');
      blocos.forEach((item) => {
        item.classList.remove('ativo');
        item.classList.add('inativo');
      });

      blocos[index].classList.add('ativo');
      blocos[index].classList.remove('inativo');
    });
  });
}
