export default function carrinhoHome() {
  const vestido = {
    decote: '',
    manga: '',
    comprimento: '',
    tamanho: '',
    quantidade: 1,
  };
  const comprar = document.querySelector('.comprar');
  comprar.addEventListener('click', () => {
    const teste = JSON.parse(localStorage.getItem('item'));
    console.log(teste);
  });
}
