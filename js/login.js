const login = {
  usuario: 'rainesgoncalves@gmail.com',
  senha: '123456',
};
const enderecoCadastro = [
  {
    titulo: 'CASA',
    endereco: 'Rua Torres da Barra, 207',
    complemento: 'Apto:402',
    bairro: 'Bairro:Água Branca',
    cidade: 'Cidade: São Paulo - SP',
    cep: 'CEP: 05037-055',
  },
  {
    titulo: 'MÃE',
    endereco: 'Rua Pref. Sezefreo Amorim Cortex, 207',
    complemento: '',
    bairro: 'Bairro: Vila Loty',
    cidade: 'Cidade: Itanhaém - SP',
    cep: 'CEP: 11740-000',
  },
];
localStorage.setItem('cadastroEndereco', JSON.stringify(enderecoCadastro));
const endereco = enderecoCadastro[0];

const botaoAcessar = document.querySelector('.btn-login');
const botaoMostrar = document.querySelector('.mostrar');
const usuario = document.querySelector('.logar form [type="text"]');
const senha = document.querySelector('.senha [type="password"]');
const botaoEsqueci = document.querySelector('.esqueci-senha a');
const divEsqueci = document.querySelector('.esqueci-senha');

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

  if (usuario.value === login.usuario && senha.value === login.senha) {
    localStorage.setItem('acesso', 'logado');
    localStorage.setItem('endereco', JSON.stringify(endereco));
    window.history.back('./pagamento.html');
  } else if (usuario.value === '' || senha.value === '') {
    if (usuario.value === '') {
      const login = document.querySelector('.login-input');
      const loginAtivo = document.querySelector('.login-input span');
      const loginObrigatorio = document.createElement('span');
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
