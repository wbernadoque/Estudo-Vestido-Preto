export default function simulaCep() {
  const vestido = JSON.parse(localStorage.getItem('item'));
  if (vestido.length > 0) {
    let cep = '';

    const validadorCEP = /\d{5}\-\d{3}/;

    const containerFreteInput = document.querySelector(
      '.container-frete .input-buttom'
    );
    const buttonFrete = containerFreteInput.querySelector('button');

    const input = containerFreteInput.querySelector('input');
    input.addEventListener('keyup', (event) => {
      cep = event.target.value;
      cep = cep.replace(/\D/g, '');
      cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
      cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
      input.value = cep;
    });

    buttonFrete.addEventListener('click', function (event) {
      event.preventDefault();
      const info = document.querySelector('.frete-info');
      const erro = document.querySelector('.erro');
      const containerFrete = document.querySelector('.container-frete form');

      if (erro) {
        containerFrete.removeChild(erro);
      }
      if (info) {
        containerFrete.removeChild(info);
      }

      if (input.value.length === 9 && validadorCEP.test(input.value)) {
        const containerInfo = document.createElement('div');
        containerInfo.classList.add('frete-info');
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode('Sedex'));
        const freteGratis = document.createElement('h3');
        freteGratis.appendChild(document.createTextNode('Frete grátis'));
        const valor = document.createElement('h3');
        valor.appendChild(document.createTextNode('R$ 10,90'));
        const motoboy = document.createElement('h2');
        motoboy.appendChild(document.createTextNode('Motoboy'));
        const recebaAte = document.createElement('span');
        recebaAte.appendChild(
          document.createTextNode('Receba até dia XX de Abril')
        );
        const recebaHoje = document.createElement('span');
        recebaHoje.appendChild(document.createTextNode('Receba hoje *'));

        containerInfo.appendChild(h2);
        containerInfo.appendChild(recebaAte);
        containerInfo.appendChild(freteGratis);
        containerInfo.appendChild(motoboy);
        containerInfo.appendChild(recebaHoje);
        containerInfo.appendChild(valor);

        containerFrete.appendChild(containerInfo);
        const freteResumo = document.querySelector('.frete');
        freteResumo.classList.add('ativo');
        freteResumo.classList.remove('desativado');
      } else {
        const invalido = document.createElement('span');
        invalido.classList.add('erro');
        invalido.classList.add('ativo');
        invalido.appendChild(document.createTextNode('Digite um CEP válido'));
        containerFrete.appendChild(invalido);
      }
    });
  }
}
