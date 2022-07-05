/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/




// ELEMENTOS DA 1a CARTA APENAS
let imgFoto       = document.querySelector('#imagem')
let titulo          = document.querySelector('#titulo')
let ano = document.querySelector('#ano')
let diretor         = document.querySelector('#diretor')
let elenco          = document.querySelector('#elenco')
let generos        = document.querySelector('#generos')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'data.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        atribuirDados2(dados, i)
    })
} 


// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('imagem')
let tituloSerie         = document.getElementsByClassName('titulo')
let anoSerie = document.getElementsByClassName('ano')
let diretorSerie         = document.getElementsByClassName('diretor')
let elencoSerie          = document.getElementsByClassName('elenco')
let generosSerie        = document.getElementsByClassName('generos')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', dados.series[i].imagem)
    tituloSerie[i].textContent         = dados.series[i].titulo
    anoSerie[i].textContent = dados.series[i].ano
    diretorSerie[i].textContent         = dados.series[i].diretor
    elencoSerie[i].textContent          = dados.series[i].elenco
    generosSerie[i].textContent = dados.series[i].generos
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'imagem')
    imagem.setAttribute('src', '.desafio/images/pose.jpg')

    // TITULO DA SERIE
    let tituloSerie = document.createElement("h2")
    tituloSerie.setAttribute('class', 'titulo')
    carta.appendChild(tituloSerie)
    tituloSerie.textContent = "Titulo"

    // ANO DA SÉRIE
    let anoSerie = document.createElement("h3")
    anoSerie.setAttribute('class', 'ano')
    carta.appendChild(anoSerie)

    anoSerie.innerHTML = "Ano"

    // DIRETOR DA SÉRIE
    let diretorSerie = document.createElement("h3")
    diretorSerie.setAttribute('class', 'diretor')
    carta.appendChild(diretorSerie)
    diretorSerie.textContent = "Diretor" 

    // ELENCO DA SÉRIE
    let elencoSerie = document.createElement("h3")
    elencoSerie.setAttribute('class', 'elenco')
    carta.appendChild(elencoSerie)
    elencoSerie.textContent = "Elenco" 

    // generos DA SÉRIE
    let generosSerie = document.createElement("h3");

    carta.appendChild(generosSerie);

    generosSerie.setAttribute('class', 'generos');


    generosSerie.textContent = "generos";

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4) 