const itemsComprados = JSON.parse(localStorage.getItem('item'));
let formaPag = localStorage.getItem('pagamento');
const desconto = +localStorage.getItem('desconto');
let frete = localStorage.getItem('frete');
const tamanho = window.innerWidth;
let totalCompra = 0;
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
  totalCompra = totalItems;
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
    const cartao = document.querySelector('.info-boleto span');

    const botaoCopiar = document.querySelector('.copiar-codigo');
    botaoCopiar.addEventListener('click', () => {
      navigator.clipboard.writeText(cartao.textContent);
      botaoCopiar.textContent = 'COPIADO';
    });
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

//administrando tamanho da pagina
function tamanhoPagina() {
  if (tamanho <= 768) {
    const endereco = document.querySelector('.endereco-entrega');
    const resumo = document.querySelector('.items-resumo');
    const paginaResumo = document.querySelector('.resumo-pedido');
    const formaDePag = document.querySelector('.forma-pagamento');
    let dadosCompra = localStorage.getItem('pagamento');
    if (dadosCompra === 'Boleto') {
    } else {
      dadosCompra = JSON.parse(dadosCompra);
    }
    const divPrazoEntrega = document.createElement('div');
    divPrazoEntrega.classList.add('entrega-prazo');
    const tituloPrazo = document.createElement('h1');
    tituloPrazo.appendChild(document.createTextNode('Prazo de Entrega'));
    divPrazoEntrega.appendChild(tituloPrazo);
    const containerFrete = document.createElement('div');
    containerFrete.classList.add('container-entrega');
    divPrazoEntrega.appendChild(containerFrete);
    paginaResumo.insertBefore(divPrazoEntrega, formaDePag);
    //inserindo dados dentro do container de frete
    const nomeFrete = document.createElement('h2');
    let valorFrete = localStorage.getItem('frete');
    const dataEntrega = document.createElement('span');
    dataEntrega.appendChild(document.createTextNode('xx de Abril'));
    const exibicaoValorFrete = document.createElement('h2');

    if (valorFrete !== 'gratis') {
      valorFrete = +valorFrete;
      exibicaoValorFrete.appendChild(
        document.createTextNode(
          valorFrete.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        )
      );
      nomeFrete.appendChild(document.createTextNode('Motoboy'));
      containerFrete.appendChild(nomeFrete);
      containerFrete.appendChild(dataEntrega);
      containerFrete.appendChild(exibicaoValorFrete);
    } else {
      exibicaoValorFrete.appendChild(document.createTextNode('Grátis'));
      nomeFrete.appendChild(document.createTextNode('Sedex'));
      containerFrete.appendChild(nomeFrete);
      containerFrete.appendChild(dataEntrega);
      containerFrete.appendChild(exibicaoValorFrete);
    }
    nomeFrete.appendChild(document.createTextNode(''));

    paginaResumo.insertBefore(resumo, endereco);

    if (dadosCompra != 'Boleto') {
      let spanPag = document.querySelectorAll('.forma-pagamento span');
      spanPag = spanPag[1];

      const quantidadeParcela = dadosCompra.forma;
      const dadosParcela = quantidadeParcela.split(' ');

      const dados = document.createElement('span');
      dados.appendChild(
        document.createTextNode(
          'Pagamento em: ' +
            dadosParcela[0] +
            ' ' +
            dadosParcela[3] +
            ' ' +
            dadosParcela[4] +
            ' de'
        )
      );
      const total = document.createElement('span');
      total.classList.add('total-compra');
      total.appendChild(document.createTextNode(dadosParcela[2]));
      dados.appendChild(total);
      formaDePag.appendChild(dados);
      formaDePag.removeChild(spanPag);
    } else {
    }
  }
}

//inserindo endereço
function endereco() {
  const enderecoSelecionado = JSON.parse(localStorage.getItem('endereco'));
  const enderecoTitulo = document.querySelector('.endereco h3');
  const enderecoSpans = document.querySelectorAll('.endereco span');

  enderecoTitulo.append(enderecoSelecionado.titulo);
  enderecoSpans[0].append(enderecoSelecionado.endereco);
  enderecoSpans[1].append(enderecoSelecionado.complemento);
  enderecoSpans[2].append(enderecoSelecionado.bairro);
  enderecoSpans[3].append(enderecoSelecionado.cidade);
  enderecoSpans[4].append(enderecoSelecionado.cep);
}

//limpando compra
function limpandoCompra() {
  localStorage.removeItem('frete');
  localStorage.removeItem('selecao');
  localStorage.removeItem('desconto');
  localStorage.removeItem('pagamento');
  localStorage.removeItem('item');
}

inserirItems();
total();
inserirFrete();
pagamento();
pagamentoSelecionado();
inserirDesconto();
endereco();
tamanhoPagina();
limpandoCompra();
