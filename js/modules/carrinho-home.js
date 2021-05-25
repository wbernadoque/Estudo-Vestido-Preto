export default function carrinhoHome() {
  const carrinho = document.querySelector('.carrinho-compra .page-width');
  let botoesLixeira;
  let vestido = JSON.parse(localStorage.getItem('item'));
  let precoOld = 199.9;
  const precoNew = 154.99;
  let precoSubTotal = 0;
  let precoValorTotal = 0;

  const acesso = localStorage.getItem('acesso', 'logado');
  let porcentagem = 0;
  const vestidos = [
    {
      tipo: 1,
      decote: 'princesa',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 2,
      decote: 'princesa',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 3,
      decote: 'princesa',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 4,
      decote: 'princesa',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 5,
      decote: 'U',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 6,
      decote: 'U',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 7,
      decote: 'U',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 8,
      decote: 'U',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 9,
      decote: 'gota',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 10,
      decote: 'gota',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 11,
      decote: 'gota',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 12,
      decote: 'gota',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 13,
      decote: 'gola alta',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 14,
      decote: 'gola alta',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 15,
      decote: 'gola alta',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 16,
      decote: 'gola alta',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
    {
      tipo: 17,
      decote: 'gola x',
      manga: 'Alça',
      comprimento: 'Curto',
    },
    {
      tipo: 18,
      decote: 'gola x',
      manga: 'Alça',
      comprimento: 'Longo',
    },
    {
      tipo: 19,
      decote: 'gola x',
      manga: 'Manga Longa',
      comprimento: 'Curto',
    },
    {
      tipo: 20,
      decote: 'gola x',
      manga: 'Manga Longa',
      comprimento: 'Longo',
    },
  ];

  //adicionando desconto

  function desconto() {
    const botaoDesconto = document.querySelector(
      '.container-resumo .input-buttom button'
    );
    localStorage.setItem('desconto', 0);
    botaoDesconto.addEventListener('click', (event) => {
      event.preventDefault();
      const containerResumo = document.querySelector('.container-resumo');
      const divSubTotal = document.querySelector('.container-resumo .subtotal');
      const cupomErradoIdem = document.querySelector('.cupom-errado');
      const descontoAtivado = document.querySelector('.desconto');

      const containerDesconto = document.querySelector(
        '.container-resumo .input-buttom'
      );
      const input = containerDesconto.querySelector('input');
      if (input.value === 'MEUPRIMEIROVESTIDOPRETO') {
        const valorTotal = document.querySelector(
          '.subtotal .total-items .preco'
        );
        let total = valorTotal.innerHTML.split(';');

        //removendo erro caso ja tenha
        if (cupomErradoIdem !== null) {
          containerDesconto.removeChild(cupomErradoIdem);
        }

        if (descontoAtivado === null) {
          const divDesconto = document.createElement('div');
          divDesconto.classList.add('desconto');
          const descDesconto = document.createElement('span');
          descDesconto.appendChild(document.createTextNode('Desconto:'));
          const valorDesconto = document.createElement('span');

          vestido.forEach((item) => {
            porcentagem += item.quantidade * 154.99;
          });
          porcentagem = +(porcentagem * 0.1).toFixed(2);
          total = +total[1].replace(',', '.') - porcentagem;
          valorTotal.innerHTML = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
          valorDesconto.appendChild(
            document.createTextNode(
              porcentagem.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            )
          );
          divDesconto.appendChild(descDesconto);
          divDesconto.appendChild(valorDesconto);
          containerResumo.insertBefore(divDesconto, divSubTotal);
          localStorage.setItem('desconto', porcentagem.toFixed(2));
        } else {
          // porcentagem = 0;
          // containerResumo.removeChild(descontoAtivado);
        }
      } else {
        if (cupomErradoIdem === null) {
          const cupomErrado = document.createElement('span');
          cupomErrado.classList.add('cupom-errado');
          cupomErrado.appendChild(document.createTextNode('Cupom inválido'));
          containerDesconto.appendChild(cupomErrado);
        } else {
        }
      }
    });
  }

  //criando pagina de carrinho quando houver items
  function itemCarrinho() {
    if (vestido.length === 0) {
      const funciona = document.querySelector('.funciona');
      const funcionaImagem = document.createElement('img');
      funcionaImagem.src = 'img/como-funciona.png';

      funciona.appendChild(funcionaImagem);
      const img = document.createElement('img');
      img.src = 'img/shopping-bag.svg';
      img.classList.add('sacola-vazia');
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
      descricaoCompra.href = './index.html';
      textoVazia.appendChild(descricaoCompra);
      carrinho.appendChild(img);
      carrinho.appendChild(separador);
      carrinho.appendChild(tituloVazia);
      carrinho.appendChild(textoVazia);
    } else {
      //inserindo div de cupom
      const cupom = document.createElement('div');
      const containerProduto = document.createElement('div');
      containerProduto.classList.add('container-produto');
      const produtos = document.createElement('div');
      produtos.classList.add('produtos');
      const resumo = document.createElement('div');
      resumo.classList.add('resumo');
      cupom.classList.add('cupom');
      cupom.appendChild(
        document.createTextNode(
          'Primeira vez por aqui? Então use o cupom “MEUPRIMEIROVESTIDOPRETO” e ganhe 10% de desconto. Consulte as regras, veja o regulamento'
        )
      );
      carrinho.appendChild(cupom);
      const meuCarrinho = document.createElement('h1');
      meuCarrinho.appendChild(document.createTextNode('MEU CARRINHO'));
      produtos.appendChild(meuCarrinho);
      vestido.forEach((item, index) => {
        //meu carrinho e resumo

        const itemAdd = document.createElement('div');
        itemAdd.classList.add('item-add');
        const itemProduto = document.createElement('div');
        itemProduto.classList.add('item');
        itemAdd.appendChild(itemProduto);
        const imagem = document.createElement('img');

        //inserindo imagem da compra

        vestidos.forEach((itemTipo) => {
          if (
            itemTipo.decote === item.decote &&
            itemTipo.manga === item.manga &&
            itemTipo.comprimento === item.comprimento
          ) {
            switch (itemTipo.tipo) {
              case 1:
                imagem.src = 'img/tipo-1/1.png';
                break;

              case 2:
                imagem.src = 'img/tipo-2/1.png';
                break;

              case 3:
                imagem.src = 'img/tipo-3/1.png';
                break;

              case 4:
                imagem.src = 'img/tipo-4/1.png';
                break;

              case 5:
                imagem.src = 'img/tipo-5/1.png';
                break;

              case 6:
                imagem.src = 'img/tipo-6/1.png';
                break;

              case 7:
                imagem.src = 'img/tipo-7/1.png';
                break;

              case 8:
                imagem.src = 'img/tipo-8/1.png';
                break;

              case 9:
                imagem.src = 'img/tipo-9/1.png';
                break;

              case 10:
                imagem.src = 'img/tipo-10/1.png';
                break;

              case 11:
                imagem.src = 'img/tipo-11/1.png';
                break;

              case 12:
                imagem.src = 'img/tipo-12/1.png';
                break;

              case 13:
                imagem.src = 'img/tipo-13/1.png';
                break;

              case 14:
                imagem.src = 'img/tipo-14/1.png';
                break;

              case 15:
                imagem.src = 'img/tipo-15/1.png';
                break;

              case 16:
                imagem.src = 'img/tipo-16/1.png';
                break;

              case 17:
                imagem.src = 'img/tipo-17/1.png';
                break;

              case 18:
                imagem.src = 'img/tipo-18/1.png';
                break;

              case 19:
                imagem.src = 'img/tipo-19/1.png';
                break;

              case 20:
                imagem.src = 'img/tipo-20/1.png';
                break;

              default:
                break;
            }
          }
        });

        //        imagem.src = 'img/imagem-carrinho.png';

        itemProduto.appendChild(imagem);
        const detalhes = document.createElement('div');
        detalhes.classList.add('detalhes');
        itemProduto.appendChild(detalhes);
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode('VESTIDO PRETO ONE'));
        detalhes.appendChild(h2);
        const decote = document.createElement('span');
        decote.appendChild(document.createTextNode('Decote: ' + item.decote));
        const manga = document.createElement('span');
        manga.appendChild(document.createTextNode('Manga: ' + item.manga));
        const comprimento = document.createElement('span');
        comprimento.appendChild(
          document.createTextNode('Comprimento: ' + item.comprimento)
        );
        const tamanho = document.createElement('span');
        tamanho.appendChild(
          document.createTextNode('Tamanho: ' + item.tamanho)
        );
        detalhes.appendChild(decote);
        detalhes.appendChild(manga);
        detalhes.appendChild(comprimento);
        detalhes.appendChild(tamanho);

        const form = document.createElement('form');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'presente';
        input.value = 'presente';
        form.appendChild(input);
        const descInput = document.createElement('span');
        descInput.appendChild(
          document.createTextNode('Embalar para presentes')
        );
        form.appendChild(descInput);
        detalhes.appendChild(form);

        const lixeira = document.createElement('a');
        lixeira.classList.add('lixeira');

        const imgLixeira = document.createElement('img');
        imgLixeira.classList.add('lixeira');
        imgLixeira.src = 'img/lixeira.png';
        imgLixeira.id = index;
        lixeira.appendChild(imgLixeira);
        itemProduto.appendChild(lixeira);

        const info = document.createElement('div');
        info.classList.add('info');

        const botoesQtd = document.createElement('div');
        botoesQtd.classList.add('botoes-quantidade');
        const quantidade = document.createElement('span');
        quantidade.appendChild(document.createTextNode('Quantidade'));
        botoesQtd.appendChild(quantidade);
        const qtdComprar = document.createElement('div');
        qtdComprar.classList.add('qtd-comprar');
        botoesQtd.appendChild(qtdComprar);
        const divQtd = document.createElement('div');
        divQtd.classList.add('quantidade');
        qtdComprar.appendChild(divQtd);
        const menos = document.createElement('a');
        menos.classList.add('menos');
        menos.setAttribute('id', index);
        menos.appendChild(document.createTextNode('-'));
        divQtd.appendChild(menos);
        const valor = document.createElement('a');
        valor.classList.add('valor');
        valor.setAttribute('id', index);
        valor.appendChild(document.createTextNode(item.quantidade));
        divQtd.appendChild(valor);
        const mais = document.createElement('a');
        mais.classList.add('mais');
        mais.setAttribute('id', index);
        mais.appendChild(document.createTextNode('+'));
        divQtd.appendChild(mais);

        info.appendChild(botoesQtd);

        const preco = document.createElement('div');
        preco.classList.add('preco');
        const precoInicial = document.createElement('span');
        precoInicial.appendChild(
          document.createTextNode(
            precoOld.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          )
        );

        precoSubTotal += precoOld * item.quantidade;
        preco.appendChild(precoInicial);
        const precoFinal = document.createElement('span');
        precoFinal.classList.add('preco-final');
        precoFinal.appendChild(
          document.createTextNode(
            precoNew.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          )
        );
        precoValorTotal += precoNew * item.quantidade;
        preco.appendChild(precoFinal);

        info.appendChild(preco);
        itemAdd.appendChild(info);

        produtos.appendChild(itemAdd);
      });

      //criando calculo de frete
      const containerFrete = document.createElement('div');
      containerFrete.classList.add('container-frete');

      const formCEP = document.createElement('form');
      containerFrete.appendChild(formCEP);
      const tituloFrete = document.createElement('label');

      tituloFrete.appendChild(
        document.createTextNode('Simule o frete e prazo de entrega')
      );
      formCEP.appendChild(tituloFrete);
      const divCEP = document.createElement('div');
      divCEP.classList.add('input-buttom');
      formCEP.appendChild(divCEP);

      const inputCEP = document.createElement('input');
      inputCEP.type = 'text';
      inputCEP.maxLength = 9;
      divCEP.appendChild(inputCEP);
      const buttonCEP = document.createElement('button');
      buttonCEP.appendChild(document.createTextNode('CALCULAR'));
      divCEP.appendChild(buttonCEP);
      const naoSeiCEP = document.createElement('a');
      naoSeiCEP.appendChild(document.createTextNode('não sei meu CEP'));
      divCEP.appendChild(naoSeiCEP);
      produtos.appendChild(containerFrete);

      //criando resumo de compra

      resumo.classList.add('resumo');
      const tituloResumo = document.createElement('h1');
      tituloResumo.appendChild(document.createTextNode('RESUMO DA COMPRA'));
      resumo.appendChild(tituloResumo);
      const containerResumo = document.createElement('div');
      containerResumo.classList.add('container-resumo');
      resumo.appendChild(containerResumo);
      const subtotalItems = document.createElement('div');
      subtotalItems.classList.add('subtotal-items');
      containerResumo.appendChild(subtotalItems);
      const subtotal = document.createElement('span');
      subtotal.appendChild(
        document.createTextNode('Subtotal (' + vestido.length + ' item):')
      );
      subtotalItems.appendChild(subtotal);
      const subtotalSDesc = document.createElement('span');
      subtotalSDesc.appendChild(
        document.createTextNode(
          precoSubTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        )
      );
      subtotalItems.appendChild(subtotalSDesc);

      const formCupom = document.createElement('form');
      const labelCupom = document.createElement('label');
      labelCupom.appendChild(
        document.createTextNode('Possui cupom de desconto?')
      );
      formCupom.appendChild(labelCupom);
      const divCupom = document.createElement('div');
      divCupom.classList.add('input-buttom');
      formCupom.appendChild(divCupom);
      const inputCupom = document.createElement('input');
      inputCupom.type = 'text';

      divCupom.appendChild(inputCupom);
      const botaoCupom = document.createElement('button');
      botaoCupom.appendChild(document.createTextNode('ADICIONAR DESCONTO'));
      divCupom.appendChild(botaoCupom);

      const totalItems = document.createElement('div');
      totalItems.classList.add('subtotal');
      const totalValor = document.createElement('span');
      totalValor.appendChild(document.createTextNode('Valor total:'));
      totalItems.appendChild(totalValor);
      const frete = document.createElement('div');
      frete.classList.add('frete');
      frete.classList.add('desativado');
      const descFrete = document.createElement('span');
      descFrete.appendChild(document.createTextNode('Frete:'));
      frete.appendChild(descFrete);
      const divFreteValor = document.createElement('div');
      const valorFrete = document.createElement('h1');
      valorFrete.appendChild(document.createTextNode('Grátis'));
      divFreteValor.appendChild(valorFrete);
      const diasFrete = document.createElement('span');
      diasFrete.appendChild(document.createTextNode('3 a 4 dias úteis'));
      divFreteValor.appendChild(diasFrete);
      frete.appendChild(divFreteValor);

      const divTotal = document.createElement('div');
      divTotal.classList.add('total-items');
      totalItems.appendChild(divTotal);
      const precoTotal = document.createElement('span');
      precoTotal.classList.add('preco');
      precoTotal.appendChild(
        document.createTextNode(
          precoValorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        )
      );
      divTotal.appendChild(precoTotal);
      const precoTotalParcela = document.createElement('span');
      precoTotalParcela.appendChild(
        document.createTextNode('Em até 6x de R$25,82 sem juros')
      );
      divTotal.appendChild(precoTotalParcela);
      containerResumo.appendChild(frete);
      containerResumo.appendChild(formCupom);
      containerResumo.appendChild(totalItems);

      const botaoContinuar = document.createElement('a');
      botaoContinuar.href = './index.html';
      botaoContinuar.classList.add('continuar');
      botaoContinuar.appendChild(
        document.createTextNode('CONTINUAR COMPRANDO')
      );
      containerResumo.appendChild(botaoContinuar);
      const botaoFinalizar = document.createElement('a');
      if (acesso) {
        botaoFinalizar.setAttribute('href', './pagamento.html');
      } else {
        botaoFinalizar.setAttribute('href', './login.html');
      }
      botaoFinalizar.classList.add('finalizar');
      botaoFinalizar.appendChild(document.createTextNode('FINALIZAR COMPRA'));
      containerResumo.appendChild(botaoFinalizar);
      containerProduto.appendChild(produtos);
      containerProduto.appendChild(resumo);
      carrinho.appendChild(containerProduto);

      //compra segura
      const divSeg = document.createElement('div');
      divSeg.classList.add('compra-segura');
      const imgSeg = document.createElement('img');
      imgSeg.src = 'img/cadeado.png';
      divSeg.appendChild(imgSeg);
      const spanSeg = document.createElement('span');
      spanSeg.classList.add('text-compra-segura');
      spanSeg.appendChild(document.createTextNode('Compra segura'));
      divSeg.appendChild(spanSeg);
      resumo.appendChild(divSeg);
    }

    removeItems();
  }

  //removendo items adicionados
  function removeItems() {
    botoesLixeira = document.querySelectorAll('.lixeira img');

    botoesLixeira.forEach((item) => {
      item.addEventListener('click', () => {
        const carrinho = document.querySelector('.carrinho-compra .page-width');

        const containerProduto = document.querySelector('.container-produto ');

        const cupom = document.querySelector('.cupom');

        vestido.splice(item.id, 1);
        carrinho.removeChild(cupom);
        carrinho.removeChild(containerProduto);
        localStorage.removeItem('item');
        localStorage.setItem('item', JSON.stringify(vestido));

        precoSubTotal = 0;
        precoValorTotal = 0;

        itemCarrinho();
        quantidadeItem();
      });
    });
    botoesLixeira.forEach((item) => {
      item.removeEventListener('click', () => {
        const carrinho = document.querySelector('.carrinho-compra');

        const containerProduto = document.querySelector('.container-produto');

        const cupom = document.querySelector('.cupom');

        vestido.splice(item.id, 1);
        carrinho.removeChild(cupom);
        carrinho.removeChild(containerProduto);
        localStorage.removeItem('item');
        localStorage.setItem('item', JSON.stringify(vestido));

        precoSubTotal -= precoOld;
        precoValorTotal -= precoNew;

        itemCarrinho();
        quantidadeItem();
      });
    });
  }

  function quantidadeItem() {
    const botoesMenos = document.querySelectorAll('.quantidade a.menos');
    const botoesMais = document.querySelectorAll('.quantidade a.mais');
    const botoesValor = document.querySelectorAll('.quantidade a.valor');

    botoesMais.forEach((item, index) => {
      item.addEventListener('click', () => {
        const subTotalResumo = document.querySelectorAll(
          '.subtotal-items span'
        );
        const totalResumo = document.querySelectorAll('span.preco');
        vestido[index].quantidade = botoesValor[index].innerHTML =
          parseInt(botoesValor[index].innerHTML) + 1;
        precoSubTotal += precoOld;
        precoValorTotal += precoNew;
        subTotalResumo[1].innerHTML = precoSubTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        totalResumo[0].innerHTML = precoValorTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        localStorage.removeItem('item');
        localStorage.setItem('item', JSON.stringify(vestido));
      });
      item.removeEventListener('click', () => {
        const subTotalResumo = document.querySelectorAll(
          '.subtotal-items span'
        );
        const totalResumo = document.querySelectorAll('span.preco');
        vestido[index].quantidade = botoesValor[index].innerHTML =
          parseInt(botoesValor[index].innerHTML) + 1;
        precoSubTotal += precoOld;
        precoValorTotal += precoNew;
        subTotalResumo[1].innerHTML = precoSubTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        totalResumo[0].innerHTML = precoValorTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        localStorage.removeItem('item');
        localStorage.setItem('item', JSON.stringify(vestido));
      });
    });
    botoesMenos.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (parseInt(botoesValor[index].innerHTML) === 1) {
        } else {
          const subTotalResumo = document.querySelectorAll(
            '.subtotal-items span'
          );
          const totalResumo = document.querySelectorAll('span.preco');
          vestido[index].quantidade = botoesValor[index].innerHTML =
            parseInt(botoesValor[index].innerHTML) - 1;
          precoSubTotal -= precoOld;
          precoValorTotal -= precoNew;
          subTotalResumo[1].innerHTML = precoSubTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
          totalResumo[0].innerHTML = precoValorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
          localStorage.removeItem('item');
          localStorage.setItem('item', JSON.stringify(vestido));
        }
      });
      item.removeEventListener('click', () => {
        if (parseInt(botoesValor[index].innerHTML) === 1) {
        } else {
          const subTotalResumo = document.querySelectorAll(
            '.subtotal-items span'
          );
          const totalResumo = document.querySelectorAll('span.preco');
          vestido[index].quantidade = botoesValor[index].innerHTML =
            parseInt(botoesValor[index].innerHTML) - 1;
          precoSubTotal -= precoOld;
          precoValorTotal -= precoNew;
          subTotalResumo[1].innerHTML = precoSubTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
          totalResumo[0].innerHTML = precoValorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
          localStorage.removeItem('item');
          localStorage.setItem('item', JSON.stringify(vestido));
        }
      });
    });
  }

  itemCarrinho();
  if (vestido.length > 0) {
    quantidadeItem();
    desconto();
  }
}
