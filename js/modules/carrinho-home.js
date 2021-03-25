export default function carrinhoHome() {
  const carrinho = document.querySelector('.carrinho-compra');

  const vestido = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
    quantidade: 1,
  };

  function itemCarrinho() {
    const teste = JSON.parse(localStorage.getItem('item'));
    if (teste === null) {
      const funciona = document.querySelector('.funciona');
      const funcionaImagem = document.createElement('img');
      funcionaImagem.src = 'img/como-funciona.png';
      funciona.appendChild(funcionaImagem);
      console.log(funciona);
      const img = document.createElement('img');
      img.src = 'img/shopping-bag.svg';
      const separador = document.createElement('div');
      separador.classList.add('separador');
      const tituloVazia = document.createElement('h1');
      tituloVazia.appendChild(document.createTextNode('Sua sacola esta vazia'));
      const textoVazia = document.createElement('p');
      textoVazia.appendChild(
        document.createTextNode(
          'Adicione o seu Vestido Preto a sacola selecionando suas caracteristicas e clicando no botão '
        )
      );
      const descricaoCompra = document.createElement('a');
      descricaoCompra.appendChild(document.createTextNode('Comprar.'));
      descricaoCompra.classList.add('laranja');
      descricaoCompra.href = 'http://127.0.0.1:5500';
      textoVazia.appendChild(descricaoCompra);
      carrinho.appendChild(img);
      carrinho.appendChild(separador);
      carrinho.appendChild(tituloVazia);
      carrinho.appendChild(textoVazia);
    } else {
      console.log(teste);
    }
  }

  itemCarrinho();
}
