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
const freteInserido = document.querySelector('.resumo .frete');
let nome = '';
let numero = '';
let validade = '';
let cvv = '';

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
            ' sem juro'
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
      'PAGAR COM CARTÃO DE CRÉDITO: ' +
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
      'PAGAR COM CARTÃO DE CRÉDITO: ' +
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
  localStorage.setItem('pagamento', 'Cartão');
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
      localStorage.setItem('frete', 'Gratis');
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

    if (form === null && formVal === null && formCvv === null) {
      localStorage.setItem('pagamento', JSON.stringify(formaPag));
      window.location.href = 'http://127.0.0.1:5500/confirmacao.html';
    }
  } else {
  }
});

//botao do boleto
botaoBoleto.addEventListener('click', () => {
  localStorage.setItem('pagamento', 'Boleto');
});

//adicionar desconto

checked();
itemsResumo();
total();
opcoes();
inserirDesconto();
