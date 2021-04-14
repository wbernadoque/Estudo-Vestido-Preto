export default function verificarLogin() {
  const login = localStorage.getItem('acesso');
  console.log(login);
  if (login === null) {
  } else {
    const usuario = document.querySelector('.usuario a');
    console.log(usuario);
    const span = document.createElement('span');
    span.classList.add('bem-vindo');
    span.appendChild(document.createTextNode('Olá, Raine Gonçalves'));
    usuario.appendChild(span);
  }
}
