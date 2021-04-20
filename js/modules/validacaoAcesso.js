export default function verificarLogin() {
  const login = localStorage.getItem('acesso');

  if (login === null) {
  } else {
    const usuario = document.querySelector('.usuario a');

    const span = document.createElement('span');
    span.classList.add('bem-vindo');
    span.appendChild(document.createTextNode('Olá, Raine Gonçalves'));
    usuario.appendChild(span);
  }
}
