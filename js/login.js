const login = {
  usuario: 'rainesgoncalves@gmail.com',
  senha: '123456',
};
const botaoAcessar = document.querySelector('.btn-login');
const botaoMostrar = document.querySelector('.mostrar');
const usuario = document.querySelector('.logar form [type="text"]');
const senha = document.querySelector('.senha [type="password"]');
const botaoEsqueci = document.querySelector('.esqueci-senha a');
const divEsqueci = document.querySelector('.esqueci-senha');

console.log(usuario.value);
botaoEsqueci.addEventListener('click', () => {
  const divEsqueciEnviado = document.createElement('div');
  const ativo = document.querySelector('.esqueci-ativo');
  const erroSenha = document.querySelector('.erro-senha');
  if (ativo) {
    divEsqueci.removeChild(ativo);
  }
  if (erroSenha) {
    divEsqueci.removeChild(erroSenha);
  }

  divEsqueciEnviado.classList.add('esqueci-ativo');
  divEsqueciEnviado.appendChild(
    document.createTextNode(
      'Um link para recuperação de senha foi enviado para o e-mail rainesgoncalves@gmail.com'
    )
  );
  divEsqueci.appendChild(divEsqueciEnviado);
});
botaoMostrar.addEventListener('click', () => {
  if (senha.type === 'password') {
    senha.type = 'text';
  } else {
    senha.type = 'password';
  }
});
botaoAcessar.addEventListener('click', (event) => {
  event.preventDefault();
  const esqueciEnviado = document.querySelector('.esqueci-ativo');
  if (esqueciEnviado) {
    divEsqueci.removeChild(esqueciEnviado);
  }
  console.log(senha.value);
  if (usuario.value === login.usuario && senha.value === login.senha) {
    console.log('Logado');
    localStorage.setItem('acesso', 'logado');
    window.location.replace('http://127.0.0.1:5500/pagamento.html');
  } else if (usuario.value === '' || senha.value === '') {
    if (usuario.value === '') {
      const loginObrigatorio = document.createElement('span');
      const login = document.querySelector('.login-input');
      const loginAtivo = document.querySelector('.login-input span');
      loginObrigatorio.appendChild(
        document.createTextNode('O campo E-mail ou CPF é obrigatório')
      );
      if (loginAtivo) {
        login.removeChild(loginAtivo);
      }
      login.appendChild(loginObrigatorio);
    }
    if (senha.value === '') {
      const senhaObrigatorio = document.createElement('span');
      const senha = document.querySelector('.senha-input');
      const senhaAtivo = document.querySelector('.senha-input span');
      senhaObrigatorio.appendChild(
        document.createTextNode('O campo senha é obrigatório')
      );
      if (senhaAtivo) {
        senha.removeChild(senhaAtivo);
      }
      senha.appendChild(senhaObrigatorio);
    }
  } else {
    localStorage.setItem('acesso', 'deslogado');
    const esqueciMinhaSenha = document.querySelector('.esqueci-senha');

    const erro = document.querySelector('.erro-senha');
    if (erro) {
      esqueciMinhaSenha.removeChild(erro);
    } else {
    }

    const divErro = document.createElement('div');
    divErro.classList.add('erro-senha');
    divErro.appendChild(
      document.createTextNode(
        'Digite seu e-mail ou CPF para receber o link de recuperação de senha'
      )
    );
    esqueciMinhaSenha.appendChild(divErro);
  }
});
