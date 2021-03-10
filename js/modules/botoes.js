export default function botoesSelecao() {
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
  const reverso = botoesDecote.reverse();

  reverso.forEach((item) => {
    const botao = document.createElement('a');
    const imagem = document.createElement('img');
    const lista = document.querySelector('.botao');
    const primeiroFilho = lista.firstChild;
    lista.insertBefore(botao, primeiroFilho);
    imagem.src = item.imagem;
    botao.appendChild(imagem);
    botao.appendChild(document.createTextNode(item.nome));
  });
}
