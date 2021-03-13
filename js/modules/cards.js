export default function cards() {
    const pessoas = document.querySelector('.pessoas');
    
    const clientes = [
        {
            foto:'img/image 3.png',
            estrelas: 4,
            nome: 'Raine Gonçalves',
            compra:{
                decote:'Alta',
                botoesManga:'Longa',
                botoesComprimento:'Curto',
                tamanho:'P'

            },
            descricao:'“Eu estou simplesmente apaixonada pelo meu vestido preto, que de básico, não tem nada! Conheci a loja através do instagram e me apaixonei pela ideia de ter um vestido preto que se adequa a diversas ocasiões. O produto chegou na minha casa dentro do prazo, fiquei encantada com o cuidado com que o vestido é embalado e adorei saber que eles se preocupam com o meio ambiente.O provador virtual me ajudou a escolher o tamanho perfeito.”'
        },
        {
            foto:'img/image 4.png',
            estrelas: 5,
            nome: 'Ismarina Fernandes',
            compra:{
                decote:'princesa',
                botoesManga:'Curta',
                botoesComprimento:'longo',
                tamanho:'M',

            },
            descricao:'“Gostei muito do meu vestido preto. “'
        },
        {
            foto:'img/image 5.png',
            estrelas: 4,
            nome: 'Thamyres',
            compra:{
                decote:'Alta',
                botoesManga:'Longa',
                botoesComprimento:'Curto',
                tamanho: 'G',

            },
            descricao:'“O vestido é muito maravilhoso, eu tive problemas ao escolher o tamanho mas a loja foi muito atenciosa e o processo de troca foi descomplicado. Agora estou com o tamanho certo e o caimento ficou perfeito.Com certeza indico a Vestido preto e voltarei a fazer compras!”'
        },

    ]

clientes.forEach(item=>{
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const perfil = document.createElement('div');
    perfil.classList.add('perfil');
    
    const imagem = document.createElement('img');
    imagem.src = item.foto;
    
    const informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');
    
    const estrelas = document.createElement('div');
    estrelas.classList.add('estrelas');
    
    for(var i=0; i<=4; i++){
        if(i<item.estrelas){
            const estrelaCheia = document.createElement('img');
            estrelaCheia.src = "img/star (1).svg";
            estrelas.appendChild(estrelaCheia);
            
        }else{
            const estrelaVazia = document.createElement('img');
            estrelaVazia.src = "img/star.svg";
            estrelas.appendChild(estrelaVazia)
        }
    }
    
    const nome = document.createElement('h3')
    nome.appendChild(document.createTextNode(item.nome));
    
    const descricao = document.createElement('div');
    descricao.classList.add('descricao');
    descricao.appendChild(document.createTextNode(item.descricao));
    
    const span = document.createElement('span');
    console.log(item.compra.decote)
    span.appendChild(document.createTextNode('Vestido Preto One: Gola '+ 
    item.compra.decote 
    +', Manga '+
    item.compra.botoesManga
    +', '
    +item.compra.botoesComprimento
    +', tamanho '
    +item.compra.tamanho));
    

    informacoes.appendChild(estrelas);
    informacoes.appendChild(nome);
    informacoes.appendChild(span);
    
    perfil.appendChild(imagem);
    perfil.appendChild(informacoes);
    
    card.appendChild(perfil);
    card.appendChild(descricao);
    
    


    

    pessoas.appendChild(card);
})

    
    
    
  }
