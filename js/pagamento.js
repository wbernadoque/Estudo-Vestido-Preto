const containerTipoFrete = document.querySelector('.container-tipo');
const tipoFrete = containerTipoFrete.querySelectorAll('a');
const cartoes = document.querySelectorAll('.box-cartao');
const radios = document.querySelectorAll('input[type="radio"]');
const bandeiras = document.querySelectorAll('#select');
const validacaoValidade = /\d{2}\/\d{2}/;
const validacaoCVV = /\d{3}/;
const validacaoNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
const form = document.querySelector('.dados-cartoes');
const botaoCompra = form.querySelector('#botao-compra');
const inputNumeroCartao = form.querySelector('#numero');
const inputNomeCartao = form.querySelector('#nome');
const inputValidadeCartao = form.querySelector('#validade');
const inputCvvCartao = form.querySelector('#cvv');
const parcelas = form.querySelector('#parcelas');
const boleto = document.querySelector('.boleto');
const botaoBoleto = boleto.querySelector('.boleto a');
const itemsComprados = JSON.parse(localStorage.getItem('item'));
const desconto = +localStorage.getItem('desconto');
const resumo = document.querySelector('.resumo');
const tamanho = window.innerWidth;
const listaAccordion = document.querySelector('.menu-accordion');
const freteInserido = document.querySelector('.resumo .frete');
const botaoContinuar = document.querySelector('.botao-continuar');
const inputCartao = document.querySelector('.cartao .titulo');
const inputBoleto = document.querySelector('.boleto .titulo');
const endereco = JSON.parse(localStorage.getItem('endereco'));

let pagCartao = inputCartao;
let pagBoleto = inputBoleto;
let nome = '';
let numero = '';
let validade = '';
let cvv = '';

console.log(endereco);

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

//inserindo items do pedido
function itemsResumo() {
  const itemProduto = document.querySelector('.item-produto');
  const itemQuantidade = document.querySelector('.item-qtd');
  const itemPreco = document.querySelector('.item-preco');
  itemsComprados.forEach((item) => {
    const itemDescricao = document.createElement('span');
    const itemQtd = document.createElement('span');
    const itemValor = document.createElement('span');
    itemDescricao.appendChild(
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
    itemQtd.appendChild(document.createTextNode(item.quantidade));
    itemValor.appendChild(
      document.createTextNode(
        (item.quantidade * 154.99).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      )
    );
    itemProduto.appendChild(itemDescricao);
    itemQuantidade.appendChild(itemQtd);
    itemPreco.appendChild(itemValor);
  });
}

//inserindo tag de desconto
function inserirDesconto() {
  if (desconto > 0) {
    const divDesconto = document.createElement('div');
    divDesconto.classList.add('desconto');
    const descricao = document.createElement('h2');
    descricao.appendChild(document.createTextNode('Descontos'));
    divDesconto.appendChild(descricao);
    const divValorDesc = document.createElement('div');
    divValorDesc.classList.add('valor-desc');
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

    resumo.insertBefore(divDesconto, freteInserido);
  }
}

//inserindo opções de pagamento cartão
function opcoes() {
  const parcelas = document.querySelector('#parcelas');
  let total = 0;
  const options = parcelas.querySelector('option');
  const frete = document.querySelectorAll('.container-tipo input');
  itemsComprados.forEach((item) => {
    total += item.quantidade;
  });

  if (frete[0].hasAttribute('checked')) {
    total = total * 154.99 - desconto;
  } else {
    total = total * 154.99 + 10.9 - desconto;
  }
  function insert() {
    for (var i = 0; i < 3; i++) {
      const option = document.createElement('option');
      option.appendChild(
        document.createTextNode(
          i +
            1 +
            'x de ' +
            (total / (i + 1)).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) +
            ' sem juros'
        )
      );
      parcelas.appendChild(option);
    }
  }
  if (options === null) {
    insert();
  } else {
    for (var i = 0; i < 3; i++) {
      const options = parcelas.querySelector('option');

      parcelas.removeChild(options);
    }
    insert();
  }
}

//calculando total
function total() {
  let totalItems = 0;
  const frete = checked();
  let total = 0;

  itemsComprados.forEach((item) => {
    totalItems += item.quantidade;
  });
  if (typeof frete === 'number') {
    total = totalItems * 154.99 + frete - desconto;

    const divTotal = document.querySelector('.total');
    const span = divTotal.querySelector('span');
    const valor = document.createElement('span');
    const botao = document.querySelector('#botao-compra');
    const botaoBoleto = document.querySelector('.boleto a');

    botaoBoleto.innerHTML =
      'PAGAR COM BOLETO BANCÁRIO: ' +
      total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

    botao.innerHTML =
      'PAGAR COM CARTÃO DE CRÉDITO: ' +
      total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

    valor.appendChild(
      document.createTextNode(
        total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      )
    );

    if (span === null) {
      divTotal.appendChild(valor);
    } else {
      divTotal.removeChild(span);
      divTotal.appendChild(valor);
    }
  } else {
    total = totalItems * 154.99 - desconto;
    const divTotal = document.querySelector('.total');
    const span = divTotal.querySelector('span');
    const valor = document.createElement('span');
    const botao = document.querySelector('#botao-compra');
    const botaoBoleto = document.querySelector('.boleto a');

    botaoBoleto.innerHTML =
      'PAGAR COM BOLETO BANCÁRIO: ' +
      total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

    botao.innerHTML =
      'PAGAR COM CARTÃO DE CRÉDITO: ' +
      total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

    valor.appendChild(
      document.createTextNode(
        total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      )
    );

    if (span === null) {
      divTotal.appendChild(valor);
    } else {
      divTotal.removeChild(span);
      divTotal.appendChild(valor);
    }
  }
}

//verificando qual frete esta marcado
function checked() {
  let checked = document.querySelectorAll('.container-tipo a');

  if (checked[0].querySelector('input').hasAttribute('checked')) {
    const frete = document.querySelector('.preco-frete');
    const valorFrete = frete.querySelector('h3');
    const diasFrete = frete.querySelector('span');

    const valorFreteAtual = document.createElement('h3');

    frete.removeChild(valorFrete);
    valorFreteAtual.appendChild(document.createTextNode('Grátis'));
    frete.insertBefore(valorFreteAtual, diasFrete);
    return 'gratis';
  } else {
    const frete = document.querySelector('.preco-frete');
    const valorFrete = frete.querySelector('h3');
    const diasFrete = frete.querySelector('span');

    const valorFreteAtual = document.createElement('h3');

    frete.removeChild(valorFrete);
    valorFreteAtual.appendChild(document.createTextNode('R$10,90'));
    frete.insertBefore(valorFreteAtual, diasFrete);
    return 10.9;
  }
}
//selecao de frete
tipoFrete.forEach((item) => {
  item.addEventListener('click', () => {
    const radio = item.querySelector('input');
    radios.forEach((item) => {
      item.checked = false;
      item.removeAttribute('checked');
    });
    radio.checked = true;
    radio.setAttribute('checked', '');
    checked();
    if (!item.classList.contains('ativo')) {
      tipoFrete.forEach((item) => {
        item.classList.toggle('ativo');
      });
    }
    opcoes();
    total();
  });
});

//selecao bandeira cartao
cartoes.forEach((item) => {
  item.addEventListener('click', () => {
    const check = item.querySelector('#select');
    bandeiras.forEach((item) => {
      item.classList.remove('ativo');
      item.classList.add('desativado');
    });
    check.classList.remove('desativado');
    check.classList.add('ativo');
  });
});

//validando numero do cartão
inputNumeroCartao.addEventListener('keyup', (event) => {
  if (inputNumeroCartao.value.length <= 19) {
    numero = event.target.value;
    numero = numero.replace(/\D/g, '');
    numero = numero.replace(/(\d{4})(\d)/, '$1 $2');
    numero = numero.replace(/(\d{4})\s(\d{4})(\d)/, '$1 $2 $3');
    numero = numero.replace(/(\d{4})\s(\d{4})\s(\d{4})(\d)/, '$1 $2 $3 $4');
    inputNumeroCartao.value = numero;
  } else {
    inputNumeroCartao.value = numero;
  }
});

//validando nome
inputNomeCartao.addEventListener('keyup', (event) => {
  nome = event.target.value;
  nome = nome.replace(/\d/, '');
  nome = nome.replace(/[§¹=ªº²+³£¢¬!?,<.>;:"!@#%¨&*()+-]/, '');
  nome = nome.replace('[', '');
  nome = nome.replace(']', '');
  nome = nome.replace(/\\/, '');
  nome = nome.replace(/\//, '');

  inputNomeCartao.value = nome;
});

//validando validade do cartão
inputValidadeCartao.addEventListener('keyup', (event) => {
  if (inputValidadeCartao.value.length <= 5) {
    validade = event.target.value;
    validade = validade.replace(/\D/g, '');
    validade = validade.replace(/(\d{2})(\d)/, '$1/$2');
    inputValidadeCartao.value = validade;
  } else {
    inputValidadeCartao.value = validade;
  }
});

//validando CVV do cartão
inputCvvCartao.addEventListener('keyup', (event) => {
  if (inputCvvCartao.value.length <= 3) {
    cvv = event.target.value;
    cvv = cvv.replace(/\D/g, '');
    inputCvvCartao.value = cvv;
  } else {
    inputCvvCartao.value = cvv;
  }
});

//selecao parcelas e liberação de botao
form.addEventListener('change', (event) => {
  const inputNumeroCartao = form.querySelector('#numero');
  const inputNomeCartao = form.querySelector('#nome');
  const inputValidadeCartao = form.querySelector('#validade');
  const inputCvvCartao = form.querySelector('#cvv');
  const parcelas = form.querySelector('#parcelas');

  if (
    inputCvvCartao.value.length > 0 &&
    inputNomeCartao.value.length > 0 &&
    inputNumeroCartao.value.length > 0 &&
    inputValidadeCartao.value.length > 0 &&
    parcelas
  ) {
    botaoCompra.classList.remove('desabilitado');
    botaoCompra.classList.add('ativo');
  }
});

//botao de compra com cartão
botaoCompra.addEventListener('click', (event) => {
  event.preventDefault();
  // localStorage.setItem('pagamento', 'Cartao');
  const form = document.querySelector('.dados-cartoes');

  const inputNumeroCartao = form.querySelector('#numero');
  const inputNomeCartao = form.querySelector('#nome');
  const inputValidadeCartao = form.querySelector('#validade');
  const inputCvvCartao = form.querySelector('#cvv');
  const spans = document.querySelectorAll('.invalido');
  const spanV = document.querySelector('.invalido-v');
  const spanC = document.querySelector('.invalido-c');
  const formV = document.querySelector('.val');
  const formC = document.querySelector('.cvv');

  if (spans !== null) {
    spans.forEach((item) => {
      form.removeChild(item);
    });
  }
  if (spanV !== null) {
    formV.removeChild(spanV);
  }
  if (spanC !== null) {
    formC.removeChild(spanC);
  }

  if (inputNumeroCartao.value.length < 19) {
    const span = document.createElement('span');
    span.classList.add('invalido');
    span.appendChild(document.createTextNode('Número de cartão inválido'));
    inputNumeroCartao.after(span);
  }
  if (validacaoNome.test(inputNomeCartao.value)) {
  } else {
    const span = document.createElement('span');
    span.classList.add('invalido');
    span.appendChild(document.createTextNode('Nome inválido'));
    inputNomeCartao.after(span);
  }
  if (validacaoValidade.test(inputValidadeCartao.value)) {
    let validade = inputValidadeCartao.value.split('');
    let mes = validade[0] + validade[1];
    mes = +mes;

    let ano = validade[3] + validade[4];
    ano = +ano;
    now = new Date();
    nowAno = now.getFullYear();
    nowAno = nowAno.toString().split('');
    nowAno = nowAno[2] + nowAno[3];
    nowAno = +nowAno;
    nowMes = now.getMonth() + 1;

    if (ano >= nowAno) {
      if (mes >= nowMes && mes <= 12) {
      } else {
        const span = document.createElement('span');
        span.classList.add('invalido-v');
        span.appendChild(document.createTextNode('Validade inválida'));
        inputValidadeCartao.after(span);
      }
    } else {
      const span = document.createElement('span');
      span.classList.add('invalido-v');
      span.appendChild(document.createTextNode('Validade inválida'));
      inputValidadeCartao.after(span);
    }
  } else {
    const span = document.createElement('span');
    span.classList.add('invalido-v');
    span.appendChild(document.createTextNode('Data inválida'));
    inputValidadeCartao.after(span);
  }

  //validação CVV
  if (validacaoCVV.test(inputCvvCartao.value)) {
  } else {
    const span = document.createElement('span');
    span.classList.add('invalido-c');
    span.appendChild(document.createTextNode('Código inválido'));
    inputCvvCartao.after(span);
  }
  const botao = document.querySelector('#botao-compra');

  if (botao.classList.contains('ativo')) {
    const valor = document.querySelector('.sedex');

    if (valor.classList.contains('ativo')) {
      localStorage.setItem('frete', 'gratis');
    } else {
      localStorage.setItem('frete', 10.9);
    }
    const numeroCartao = document.querySelector('#numero').value;
    const bandeiraCartao = document.querySelectorAll('.box-cartao');
    let bandeira = '';
    const optionVezes = document.querySelector('#parcelas');
    bandeiraCartao.forEach((item) => {
      if (item.querySelector('#select').classList.contains('ativo')) {
        bandeira = item.id;
        if (bandeira === 'american-express') {
          bandeira = 'American Express';
        } else if (bandeira === 'visa') {
          bandeira = 'Visa';
        } else if (bandeira === 'elo') {
          bandeira = 'Elo';
        } else {
          bandeira = 'Mastercard';
        }
      }
    });
    const formaPag = {
      numero: numeroCartao,
      forma: optionVezes.value,
      bandeira: bandeira,
    };
    const form = document.querySelector('.dados-cartoes .invalido');
    const formVal = document.querySelector('.invalido-v');
    const formCvv = document.querySelector('.invalido-c');

    if (
      form === null &&
      formVal === null &&
      formCvv === null &&
      window.innerWidth > 768
    ) {
      localStorage.setItem('pagamento', JSON.stringify(formaPag));
      window.location.href = 'http://127.0.0.1:5500/confirmacao.html';
    }

    //mostrar resumo
    if (
      form === null &&
      formVal === null &&
      formCvv === null &&
      window.innerWidth <= 768
    ) {
      localStorage.setItem('pagamento', JSON.stringify(formaPag));
      const pagamento = document.querySelector(
        '.pagamento-container .pagamento'
      );
      const resumo = document.querySelector('.resumo');
      const menu = document.querySelector('.menu-accordion');
      const img = menu.querySelector('img');

      const items = document.querySelector('.items');
      const itemsProduto = items.querySelector('.item-produto');
      const desconto = document.querySelector('.desconto');
      const frete = document.querySelector('.frete');
      let total = document.querySelector('.total');

      const container = document.querySelector('.container-endereco-mobile');
      pagamento.classList.add('oculto');
      resumo.classList.remove('oculto');
      menu.classList.remove('oculto');
      img.classList.add('oculto');
      items.classList.add('oculto');

      if (desconto !== null) {
        // desconto.classList.remove('oculto');
      }

      container.classList.remove('oculto');

      menu.appendChild(total);
      resumo.appendChild(frete);
      totalResumoMobileCartao();
    }
  } else {
  }
});

//botao do boleto
botaoBoleto.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.setItem('pagamento', 'Boleto');
  if (window.innerWidth > 768) {
    window.location.href = 'http://127.0.0.1:5500/confirmacao.html';
  }
  if (window.innerWidth <= 768) {
    const pagamento = document.querySelector('.pagamento-container .pagamento');
    const resumo = document.querySelector('.resumo');
    const menu = document.querySelector('.menu-accordion');
    const img = menu.querySelector('img');
    const footer = document.querySelector('footer');
    console.log(footer);
    const items = document.querySelector('.items');
    const itemsProduto = items.querySelector('.item-produto');
    const desconto = document.querySelector('.desconto');
    const frete = document.querySelector('.frete');
    let total = document.querySelector('.total');

    const container = document.querySelector('.container-endereco-mobile');
    pagamento.classList.add('oculto');
    resumo.classList.remove('oculto');
    menu.classList.remove('oculto');
    img.classList.add('oculto');
    items.classList.add('oculto');

    if (desconto !== null) {
      // desconto.classList.remove('oculto');
    }

    container.classList.remove('oculto');

    menu.appendChild(total);
    resumo.appendChild(frete);
    footer.classList.add('desativado');
    totalResumoMobileBoleto();
  }
});

//inserir total no resumo da compra com cartao
function totalResumoMobileCartao() {
  const total = document.querySelector('.menu-accordion .total');
  const frete = document.querySelector('.resumo .frete');
  const precoFrete = frete.querySelector('.preco-frete');
  const resumo = document.querySelector('.resumo');
  const formaPag = document.createElement('div');
  formaPag.classList.add('forma-pag');
  const descPag = document.createElement('h1');
  descPag.appendChild(document.createTextNode('Forma de Pagamento'));
  formaPag.appendChild(descPag);
  const detalhePag = document.createElement('span');
  detalhePag.appendChild(document.createTextNode('Cartão de crédito'));
  formaPag.appendChild(detalhePag);
  const valorTotal = document.createElement('div');
  valorTotal.classList.add('total-items');
  const descValorTotal = document.createElement('span');
  descValorTotal.appendChild(document.createTextNode('Valor total: '));
  valorTotal.appendChild(descValorTotal);
  const totalItems = document.querySelector('.menu-accordion .total span');
  const cloneTotalItems = totalItems.cloneNode(true);
  cloneTotalItems.classList.add('valor');
  valorTotal.appendChild(cloneTotalItems);
  formaPag.appendChild(valorTotal);
  const alterarPag = document.createElement('a');
  alterarPag.appendChild(document.createTextNode('Alterar forma de pagamento'));
  formaPag.appendChild(alterarPag);
  resumo.appendChild(formaPag);

  const tipoFrete = localStorage.getItem('frete');
  if (tipoFrete !== '10.9') {
    const sedex = document.createElement('h3');

    sedex.appendChild(document.createTextNode('Sedex'));
    precoFrete.appendChild(sedex);
  } else {
    const motoboy = document.createElement('h3');

    motoboy.appendChild(document.createTextNode('Motoboy'));
    precoFrete.appendChild(motoboy);
  }
  const alterarFrete = document.createElement('a');
  alterarFrete.appendChild(document.createTextNode('Alterar tipo de entrega'));
  frete.appendChild(alterarFrete);
  const divContinuar = document.createElement('div');
  divContinuar.classList.add('container-continuar');
  const confirmCompra = document.createElement('a');
  confirmCompra.appendChild(document.createTextNode('CONFIRMAR COMPRA'));
  confirmCompra.classList.add('continuar');
  divContinuar.appendChild(confirmCompra);
  resumo.appendChild(divContinuar);
  frete.classList.remove('oculto');
  frete.classList.add('confirm');
  frete.classList.remove('ativo');
  total.classList.remove('oculto');
  botaoConfirmar();
}

//inserir total no resumo da compra com boleto
function totalResumoMobileBoleto() {
  const total = document.querySelector('.menu-accordion .total');
  const frete = document.querySelector('.resumo .frete');
  const precoFrete = frete.querySelector('.preco-frete');
  const resumo = document.querySelector('.resumo');
  const formaPag = document.createElement('div');
  formaPag.classList.add('forma-pag');
  const descPag = document.createElement('h1');
  descPag.appendChild(document.createTextNode('Forma de Pagamento'));
  formaPag.appendChild(descPag);
  const detalhePag = document.createElement('span');
  detalhePag.appendChild(
    document.createTextNode(localStorage.getItem('pagamento') + ' Bancário')
  );
  formaPag.appendChild(detalhePag);
  const valorTotal = document.createElement('div');
  valorTotal.classList.add('total-items');
  const descValorTotal = document.createElement('span');
  descValorTotal.appendChild(document.createTextNode('Valor total: '));
  valorTotal.appendChild(descValorTotal);
  const totalItems = document.querySelector('.menu-accordion .total span');
  const cloneTotalItems = totalItems.cloneNode(true);
  cloneTotalItems.classList.add('valor');
  valorTotal.appendChild(cloneTotalItems);
  formaPag.appendChild(valorTotal);
  const alterarPag = document.createElement('a');
  alterarPag.appendChild(document.createTextNode('Alterar forma de pagamento'));
  formaPag.appendChild(alterarPag);
  resumo.appendChild(formaPag);

  const tipoFrete = localStorage.getItem('frete');
  if (tipoFrete !== '10.9') {
    const sedex = document.createElement('h3');

    sedex.appendChild(document.createTextNode('Sedex'));
    precoFrete.appendChild(sedex);
  } else {
    const motoboy = document.createElement('h3');

    motoboy.appendChild(document.createTextNode('Motoboy'));
    precoFrete.appendChild(motoboy);
  }
  const alterarFrete = document.createElement('a');
  alterarFrete.appendChild(document.createTextNode('Alterar tipo de entrega'));
  frete.appendChild(alterarFrete);
  const divContinuar = document.createElement('div');
  divContinuar.classList.add('container-continuar');
  const confirmCompra = document.createElement('a');
  confirmCompra.appendChild(document.createTextNode('CONFIRMAR COMPRA'));
  confirmCompra.classList.add('continuar');
  divContinuar.appendChild(confirmCompra);
  resumo.appendChild(divContinuar);
  frete.classList.remove('oculto');
  frete.classList.add('confirm');
  frete.classList.remove('ativo');
  total.classList.remove('oculto');
  botaoConfirmar();
}

function botaoConfirmar() {
  const botaoContinuar = document.querySelector('.resumo a.continuar');
  botaoContinuar.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/confirmacao.html';
  });
}
//adicionar oculto desconto
function verificandoTamanho() {
  const desconto = document.querySelector('.desconto');
  const items = document.querySelector('.items');
  const frete = document.querySelector('.frete');
  const total = document.querySelector('.total');
  const tamanho = window.innerWidth;
  const cartao = document.querySelector('.cartao');
  const boleto = document.querySelector('.boleto');
  const menuSuperior = document.querySelector('.menu');
  const menuBolinhas = menuSuperior.querySelectorAll(
    '.id-pag-ok ul li .bolinha'
  );
  const linhas = menuSuperior.querySelectorAll('.linhas .linha');

  if (tamanho <= 768) {
    //mudando menu para menu de pagamento
    menuSuperior.classList.add('pagamento');
    // menuBolinhas[1].classList.remove('ativo');
    // linhas[0].classList.remove('ativo');

    if (desconto !== null) {
      if (!desconto.classList.contains('oculto')) {
        desconto.classList.add('oculto');
      }
    }
    if (!items.classList.contains('oculto')) {
      items.classList.add('oculto');
    }
    if (!frete.classList.contains('oculto')) {
      frete.classList.add('oculto');
    }
    if (!total.classList.contains('oculto')) {
      total.classList.add('oculto');
    }
    if (!cartao.classList.contains('oculto')) {
      cartao.classList.add('oculto');
    }
    if (!boleto.classList.contains('oculto')) {
      boleto.classList.add('oculto');
    }
    modal();
  } else {
    if (menuSuperior.classList.contains('pagamento')) {
      menuSuperior.classList.remove('pagamento');
    }

    if (items.classList.contains('oculto')) {
      items.classList.remove('oculto');
    }
    if (frete.classList.contains('oculto')) {
      frete.classList.remove('oculto');
    }
    if (total.classList.contains('oculto')) {
      total.classList.remove('oculto');
    }
    if (cartao.classList.contains('oculto')) {
      cartao.classList.remove('oculto');
    }
    if (boleto.classList.contains('oculto')) {
      boleto.classList.remove('oculto');
    }
    modal();
  }
}
//modal
function modal() {
  if (tamanho <= 768) {
    const botaoAlterarEndereco = document.querySelector(
      '.container-endereco-mobile .alterar-endereco'
    );
    const fechar = document.querySelector('.titulo .fechar');

    const modal = document.querySelector('.modal');
    modal.classList.add('mobile');
    const modalDiv = document.querySelector('.modal');
    const overlayDiv = document.querySelector('.overlay');

    botaoAlterarEndereco.addEventListener('click', () => {
      modalDiv.classList.add('ativo');
      overlayDiv.classList.add('ativo');
    });
    botaoAlterarEndereco.removeEventListener('click', () => {
      modalDiv.classList.add('ativo');
      overlayDiv.classList.add('ativo');
    });
    fechar.addEventListener('click', () => {
      modalDiv.classList.remove('ativo');
      overlayDiv.classList.remove('ativo');
    });
    fechar.removeEventListener('click', () => {
      modalDiv.classList.remove('ativo');
      overlayDiv.classList.remove('ativo');
    });
  } else {
    const botaoAlterarEndereco = document.querySelector(
      '.container-endereco .alterar-endereco'
    );
    const modalDiv = document.querySelector('.modal');
    console.log(botaoAlterarEndereco);

    console.log('estou aqui');
    botaoAlterarEndereco.addEventListener('click', () => {
      modalDiv.classList.add('ativo');
    });
  }
}

//lista accordion
listaAccordion.addEventListener('click', () => {
  const img = document.querySelector('.menu-accordion img');
  const items = document.querySelector('.items');
  const frete = document.querySelector('.frete');
  const total = document.querySelector('.total');

  img.classList.toggle('ativo');
  items.classList.toggle('oculto');
  frete.classList.toggle('oculto');
  total.classList.toggle('oculto');
});

//evento de mudar tamanho da tela
window.addEventListener('resize', () => {
  verificandoTamanho();
});

//botao tipo de pagamento visualização

//botao continuar
botaoContinuar.addEventListener('click', () => {
  const resumo = document.querySelector('.resumo');
  const botao = document.querySelector('.continuar');
  const escolhaFrete = document.querySelector('.escolha-frete');
  const menu = document.querySelector('.menu-accordion');
  const cartao = document.querySelector('.cartao');
  // const tituloCartao = document.querySelector('.cartao .titulo');

  // const tituloBoleto = document.querySelector('.boleto .titulo');
  const boleto = document.querySelector('.boleto');
  const items = document.querySelector('.items');
  const frete = document.querySelector('.frete');
  const total = document.querySelector('.total');
  const pagamentoTitulo = document.querySelector('.pagamento h1');
  // const cartaoTitulo = document.querySelector('.cartao h2');
  // const boletoTitulo = document.querySelector('.boleto h2');
  const enderecoMobile = document.querySelector('.container-endereco-mobile');
  const inputBoleto = boleto.querySelector('.titulo input');
  escolhaFrete.classList.add('oculto');
  localStorage.setItem('frete', checked());
  resumo.classList.add('oculto');
  pagamentoTitulo.classList.add('oculto');
  cartao.classList.remove('oculto');
  boleto.classList.remove('oculto');
  botao.classList.add('oculto');
  menu.classList.add('oculto');
  enderecoMobile.classList.add('oculto');

  if (!items.classList.contains('oculto')) {
    items.classList.add('oculto');
  }
  if (!frete.classList.contains('oculto')) {
    frete.classList.add('oculto');
  }
  if (!total.classList.contains('oculto')) {
    total.classList.add('oculto');
  }

  // const inputCartao = document.createElement('input');
  // inputCartao.type = 'radio';
  // inputCartao.value = 'cartao';
  // const inputBoleto = document.createElement('input');
  // inputBoleto.type = 'radio';
  // inputBoleto.value = 'boleto';
  inputBoleto.checked = true;

  // tituloCartao.insertBefore(inputCartao, cartaoTitulo);
  // tituloBoleto.insertBefore(inputBoleto, boletoTitulo);
  // pagCartao = inputCartao;
  // pagBoleto = inputBoleto;
  window.scrollTo(0, 0);
});

pagCartao.addEventListener('click', () => {
  const inputCartao = document.querySelector('.cartao .titulo input');
  const tituloCartao = document.querySelector('.cartao .titulo');
  const cartaoTitulo = document.querySelector('.cartao .titulo h2');
  const inputBoleto = document.querySelector('.boleto .titulo input');
  const titulo = document.querySelector('.boleto .titulo');
  const boletoTitulo = document.querySelector('.boleto .titulo h2');
  const inputBoletoNovo = document.createElement('input');
  const spanBoleto = document.querySelector('.boleto span');
  const aBoleto = document.querySelector('.boleto a');

  const bandeiras = document.querySelector('.cartoes');
  const form = document.querySelector('.dados-cartoes');
  bandeiras.classList.remove('oculto');
  form.classList.remove('oculto');

  spanBoleto.classList.add('oculto');
  aBoleto.classList.add('oculto');
  inputBoletoNovo.type = 'radio';
  inputBoletoNovo.value = 'boleto';
  const inputCartaoNovo = document.createElement('input');
  inputCartaoNovo.type = 'radio';
  inputCartaoNovo.value = 'cartao';
  inputCartaoNovo.checked = 1;

  titulo.removeChild(inputBoleto);

  titulo.insertBefore(inputBoletoNovo, boletoTitulo);

  tituloCartao.removeChild(inputCartao);
  tituloCartao.insertBefore(inputCartaoNovo, cartaoTitulo);
  window.scrollTo(0, 0);
});

pagBoleto.addEventListener('click', () => {
  const inputCartao = document.querySelector('.cartao .titulo input');
  const titulo = document.querySelector('.cartao .titulo');
  const cartaoTitulo = document.querySelector('.cartao .titulo h2');
  const inputBoleto = document.querySelector('.boleto .titulo input');
  const tituloBoleto = document.querySelector('.boleto .titulo');
  const boletoTitulo = document.querySelector('.boleto .titulo h2');
  const inputBoletoNovo = document.createElement('input');
  const spanBoleto = document.querySelector('.boleto span');
  const aBoleto = document.querySelector('.boleto a');

  const bandeiras = document.querySelector('.cartoes');
  const form = document.querySelector('.dados-cartoes');
  bandeiras.classList.add('oculto');
  form.classList.add('oculto');

  spanBoleto.classList.remove('oculto');
  aBoleto.classList.remove('oculto');
  inputBoletoNovo.type = 'radio';
  inputBoletoNovo.value = 'boleto';
  inputBoletoNovo.checked = 1;
  const inputCartaoNovo = document.createElement('input');
  inputCartaoNovo.type = 'radio';
  inputCartaoNovo.value = 'cartao';

  titulo.removeChild(inputCartao);

  titulo.insertBefore(inputCartaoNovo, cartaoTitulo);

  tituloBoleto.removeChild(inputBoleto);
  tituloBoleto.insertBefore(inputBoletoNovo, boletoTitulo);
  window.scrollTo(0, 0);
});

checked();
itemsResumo();
total();
opcoes();
inserirDesconto();
verificandoTamanho();
