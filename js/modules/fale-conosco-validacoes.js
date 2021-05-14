export default function faleConoscoValidacao() {
  const formularioInput = document.querySelectorAll('.contato input');
  const nomeInput = formularioInput[0];
  const numeroInput = formularioInput[2];

  const mensagem = document.querySelector('.contato textarea');
  const botaoFormulario = document.querySelector('.contato button');

  let nome = '';
  let telefone = '';

  //validando nome
  nomeInput.addEventListener('keyup', (event) => {
    nome = event.target.value;
    nome = nome.replace(/\d/, '');
    nome = nome.replace(/[§¹=ªº²+³£¢¬!?,<.>;:"!@#%¨&*()+-]/, '');
    nome = nome.replace('[', '');
    nome = nome.replace(']', '');
    nome = nome.replace(/\\/, '');
    nome = nome.replace(/\//, '');

    nomeInput.value = nome;
  });

  //validando email
  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;

    return re.test(email);
  }
  function validarCel(telefone) {
    const re = /\(\d{2}\)\s\d{5}\-\d{4}/;

    return re.test(telefone);
  }

  //validando numero de telefone
  numeroInput.addEventListener('keyup', (event) => {
    telefone = event.target.value;
    telefone = telefone.replace(/\D/g, '');
    telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2');
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');

    numeroInput.value = telefone;
  });

  //enviando mensagem (validação de campos)
  botaoFormulario.addEventListener('click', (event) => {
    event.preventDefault();
    const formulario = document.querySelector('.contato');
    const labels = formulario.querySelectorAll('label');

    //returando os invalidos que ja estiverem antes de verificação
    const invalidos = formulario.querySelectorAll('.invalido');
    if (invalidos.length > 0) {
      invalidos.forEach((item) => {
        formulario.removeChild(item);
      });
    }

    //passando pelo email
    let email = document.querySelectorAll('.contato input');
    email = email[1].value;
    const validadoEmail = validarEmail(email);

    if (validadoEmail === false) {
      const span = document.createElement('span');
      span.classList.add('invalido');
      span.appendChild(document.createTextNode('Email inválido'));

      formulario.insertBefore(span, labels[2]);
    }

    //passando pelo telefone
    const validadoCel = validarCel(telefone);
    if (validadoCel === false) {
      const span = document.createElement('span');
      span.classList.add('invalido');
      span.appendChild(document.createTextNode('Celular inválido'));

      formulario.insertBefore(span, labels[3]);
    } else {
    }
  });
}
