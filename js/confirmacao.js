const itemsComprados = JSON.parse(localStorage.getItem('item'));

//validando acesso
const login = localStorage.getItem('acesso');

if (login === null) {
} else {
  const usuario = document.querySelector('.usuario a');

  const span = document.createElement('span');
  span.classList.add('bem-vindo');
  span.appendChild(document.createTextNode('Olá, Raine Gonçalves'));
  usuario.appendChild(span);
}

//inserir items no pedido
function inserirItems() {
  const containerItems = document.querySelector('.container-items');
  const itemProduto = containerItems.querySelector('.item-produto');
  const itemQtd = containerItems.querySelector('.item-qtd');
  const itemPreco = containerItems.querySelector('.item-preco');

  itemsComprados.forEach((item) => {
    const descricaoItem = document.createElement('span');
    const qtdItem = document.createElement('span');
    const precoItem = document.createElement('span');

    descricaoItem.appendChild(
      document.createTextNode(
        'Vestido Preto One (Decote: ' +
          item.decote +
          ', Manga: ' +
          item.manga +
          ', Comprimento: ' +
          item.comprimento +
          ', Tamanho: ' +
          item.tamanho
      )
    );
    qtdItem.appendChild(document.createTextNode(item.quantidade));
    precoItem.appendChild(
      document.createTextNode(
        (item.quantidade * 154.99).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      )
    );
    itemProduto.appendChild(descricaoItem);
    itemQtd.appendChild(qtdItem);
    itemPreco.appendChild(precoItem);
  });
}

//total
function total() {
  const total = document.querySelector('.total-resumo');
  const totalDiv = document.createElement('span');
  let totalItems = 0;

  itemsComprados.forEach((item) => {
    totalItems += item.quantidade * 154.99;
  });
  totalDiv.appendChild(
    document.createTextNode(
      totalItems.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    )
  );
  total.appendChild(totalDiv);
}

//inserindo frete
function frete() {
  const freteDiv = document.querySelector('.frete-resumo');
  const spanFrete = document.createElement('span');
  let frete = localStorage.getItem('frete');
  console.log(frete);
  if (frete !== 'Gratis') {
    frete = +frete;

    spanFrete.appendChild(
      document.createTextNode(
        frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      )
    );
  } else {
    spanFrete.appendChild(document.createTextNode(frete));
  }
  freteDiv.appendChild(spanFrete);
}

//inserindo forma de pagamento
function pagamento() {
  let formaPag = localStorage.getItem('pagamento');
  const boleto = document.querySelector('.forma-pagamento');

  if (formaPag === 'Boleto') {
    const forma = document.createElement('h2');
    forma.appendChild(document.createTextNode(formaPag));
    boleto.appendChild(forma);
  } else {
    formaPag = JSON.parse(formaPag);
    const forma = document.createElement('h2');
    forma.appendChild(document.createTextNode('Cartão de Crédito'));
    boleto.appendChild(forma);
  }
}
inserirItems();
total();
frete();
pagamento();
