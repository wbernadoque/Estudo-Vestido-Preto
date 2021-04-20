export default function simulandoCEP() {
  let cep = '';
  const inputCEP = document.querySelector('#cep');
  const validadorCEP = /\d{5}\-\d{3}/;

  inputCEP.addEventListener('keyup', (event) => {
    if (cep.length <= 8) {
      cep = event.target.value;
      cep = cep.replace(/\D/g, '');
      cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
      cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
      inputCEP.value = cep;
    } else if (event.keyCode === 8 || event.keyCode === 46) {
      cep = event.target.value;
      inputCEP.value = cep;
    }
  });
}
