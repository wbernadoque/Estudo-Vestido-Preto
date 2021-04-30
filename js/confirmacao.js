const itemsComprados = JSON.parse(localStorage.getItem('item'));
let formaPag = localStorage.getItem('pagamento');
const desconto = +localStorage.getItem('desconto');
let frete = localStorage.getItem('frete');

if (frete === 'gratis') {
  frete = 0;
} else {
  frete = +frete;
}
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

//inserindo desconto
function inserirDesconto() {
  if (desconto > 0) {
    const itemsResumo = document.querySelector('.items-resumo');
    const frete = document.querySelector('.frete-resumo');
    const divDesconto = document.createElement('div');
    divDesconto.classList.add('descontos');
    const descricao = document.createElement('h2');
    descricao.appendChild(document.createTextNode('Descontos'));
    divDesconto.appendChild(descricao);
    const divValorDesc = document.createElement('div');
    divValorDesc.classList.add('preco-desconto');
    divDesconto.appendChild(divValorDesc);
    const valorDesc = document.createElement('h2');
    valorDesc.appendChild(
      document.createTextNode(
        desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      )
    );
    divValorDesc.appendChild(valorDesc);
    const cupomDesc = document.createElement('span');
    cupomDesc.appendChild(
      document.createTextNode('CUPOM: MEUPRIMEIROVESTIDOPRETO')
    );

    divValorDesc.appendChild(cupomDesc);

    itemsResumo.insertBefore(divDesconto, frete);
  }
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

//verificar boleto ou cartão
function pagamentoSelecionado() {
  const codigo = document.querySelector('.codigo-boleto');
  const boleto = document.querySelector('.boleto-impresso');
  if (formaPag === 'Boleto') {
  } else {
    codigo.classList.add('desativado');
    boleto.classList.add('desativado');
  }
}

//total
function total() {
  const total = document.querySelector('.total-resumo');
  const totalDiv = document.createElement('span');
  let totalItems = 0;

  itemsComprados.forEach((item) => {
    totalItems += item.quantidade * 154.99;
  });
  totalItems = totalItems + frete - desconto;
  totalDiv.appendChild(
    document.createTextNode(
      totalItems.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    )
  );
  total.appendChild(totalDiv);
}

//inserindo frete
function inserirFrete() {
  const freteDiv = document.querySelector('.frete-resumo');
  const spanFrete = document.createElement('span');
  let frete = localStorage.getItem('frete');

  if (frete !== 'gratis') {
    frete = +frete;

    spanFrete.appendChild(
      document.createTextNode(
        frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      )
    );
  } else {
    spanFrete.appendChild(document.createTextNode('Grátis'));
  }
  freteDiv.appendChild(spanFrete);
}

//inserindo forma de pagamento
function pagamento() {
  let formaPag = localStorage.getItem('pagamento');
  const divFormaPag = document.querySelector('.forma-pagamento');

  if (formaPag === 'Boleto') {
    const forma = document.createElement('h2');
    forma.appendChild(document.createTextNode(formaPag));
    divFormaPag.appendChild(forma);
  } else {
    formaPag = JSON.parse(formaPag);
    const forma = document.createElement('h2');

    divFormaPag.appendChild(forma);
    forma.appendChild(document.createTextNode('Cartão de Crédito'));
    const infoPag = document.createElement('span');
    const dadosParcela = document.createElement('span');

    const numeroCartao = formaPag.numero.split(' ');

    infoPag.appendChild(
      document.createTextNode(
        formaPag.bandeira + ' número: **** **** **** ' + numeroCartao[3]
      )
    );
    divFormaPag.appendChild(infoPag);
    dadosParcela.appendChild(
      document.createTextNode('Pagamento em: ' + formaPag.forma)
    );
    divFormaPag.appendChild(dadosParcela);
  }
}
inserirItems();
total();
inserirFrete();
pagamento();
pagamentoSelecionado();
inserirDesconto();
