/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

// const { formatWithOptions } = require("util")

let JSON = [
  {
    imagem: "./images/Pose.jpg",
    titulo: "Pose",
    ano: "2018",
    diretor: "Ryan Murphy",
    generos: ["Drama"],
    elenco: ["Dominique Jackson","Indya Moore","Mj Rodriguez","Angelica Ross","Hailie Sahar",],
    instagram: "https://www.instagram.com/poseonfx/",
  },
  {
    imagem: "./images/manhas.jpg",
    titulo: "Manhãs de Setembro",
    ano: "2021",
    diretor: "Luis Pinheiro",
    generos: ["Drama"],
    elenco: ["Liniker", "Linn da Quebrada"],
    instagram: "https://www.instagram.com/explore/tags/manhasdesetembroserie/",
  },
  {
    imagem: "./images/euphoria.jpg",
    titulo: "Euphoria",
    ano: "2019",
    diretor: "Sam Levinson",
    generos: ["Drama"],
    elenco: ["Hunter Schafer", "Ron Leshem", "Daphna Levin"],
    instagram: "https://www.instagram.com/euphoria/"
  },
  {
    imagem: "./images/veneno.jpeg",
    titulo: "Veneno",
    ano: "2020",
    diretor: "Javier Ambrossi",
    generos: ["Drama", "Biografia"],
    elenco: ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"],
    instagram: "https://www.instagram.com/venenolaserie/"
  },
  {
    imagem: "./images/legendary.jpg",
    titulo: "Legendary",
    ano: "2020",
    diretor: "Rik Reinholdtsen",
    generos: ["Reality Show", "Competição"],
    elenco: ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"],
    instagram: "https://www.instagram.com/legendarymax/"
  },
];
//POSE
console.log(JSON);
const imagem = document.getElementById("Foto");
const titulo = document.getElementById("titulo");
const ano = document.getElementById("Ano");
const diretor = document.getElementById("Diretor");
const generos = document.getElementById("Genero");
const elenco = document.getElementById("Elenco");
const instagram = document.getElementById("instagram");


const preencherDados = () => {
  imagem.setAttribute("src", JSON[0].imagem);
  titulo.innerText = JSON[0].titulo
  ano.innerText = JSON[0].ano
  diretor.innerText = JSON[0].diretor
  generos.innerText = JSON[0].generos
  elenco.innerText = JSON[0].elenco.join(' - ')
  instagram.setAttribute("href", JSON[0].instagram)
};
preencherDados();


//MANHÃS DE SETEMBRO
const imagemManhaDeSetembro = document.getElementById('Foto_2')
const tituloManhaDeSetembro = document.getElementById('titulo_2')
const anoManhaDeSetembro = document.getElementById('Ano_2')
const diretorManhaDeSetembro = document.getElementById ('Diretor_2')
const generosManhaDeSetembro = document.getElementById('Genero_2')
const elencoManhaDeSetembro = document.getElementById('Elenco_2')
const instagramManhaDeSetembro = document.getElementById('instagram_2')

const preencherDadosManhasDeSetembro = () => {
  imagemManhaDeSetembro.setAttribute("src", JSON[1].imagem)
  tituloManhaDeSetembro.innerText = JSON[1].titulo
  anoManhaDeSetembro.innerText = JSON[1].ano
  diretorManhaDeSetembro.innerText = JSON[1].diretor
  generosManhaDeSetembro.innerText = JSON[1].generos
  elencoManhaDeSetembro.innerText = JSON[1].elenco
  instagramManhaDeSetembro.setAttribute("href", JSON[1].instagram)
}
preencherDadosManhasDeSetembro()

//EUPHORIA
const imagemEuphoria = document.getElementById('Foto_3')
const tituloEuphoria = document.getElementById('titulo_3')
const anoEuphoria = document.getElementById('Ano_3')
const diretorEuphoria = document.getElementById('Diretor_3')
const generosEuphoria = document.getElementById('Genero_3')
const elencoEuphoria = document.getElementById('Elenco_3')
const instagramEuphoria = document.getElementById('instagram_3')

const preencherDadosEuphoria = () => {
  imagemEuphoria.setAttribute("src", JSON[2].imagem) 
  tituloEuphoria.innerText = JSON[2].titulo
  anoEuphoria.innerText = JSON[2].ano
  diretorEuphoria.innerText = JSON[2].diretor
  generosEuphoria.innerText = JSON[2].generos
  elencoEuphoria.innerText = JSON[2].elenco
  instagramEuphoria.setAttribute("href", JSON[2].instagram)
}
preencherDadosEuphoria() 

//VENENO
const imagemVeneno = document.getElementById('Foto_4')
const tituloVeneno = document.getElementById('titulo_4')
const anoVeneno = document.getElementById('Ano_4')
const diretorVeneno = document.getElementById('Diretor_4')
const generosVeneno = document.getElementById('Genero_4')
const elencoVeneno = document.getElementById('Elenco_4')
const instagramVeneno = document.getElementById('instagram_4')

const preencherDadosVeneno = () => {
  imagemVeneno.setAttribute("src", JSON[3].imagem)
  tituloVeneno.innerText = JSON[3].titulo
  anoVeneno.innerText = JSON[3].ano
  diretorVeneno.innerText = JSON[3].diretor
  generosVeneno.innerText = JSON[3].generos
  elencoVeneno.innerText = JSON[3].elenco
  instagramVeneno.setAttribute("href", JSON[3].instagram)
}
preencherDadosVeneno()

//LEGENDARY

const imagemLegendary = document.getElementById('Foto_5')
const tituloLegendary = document.getElementById('titulo_5')
const anoLegendary = document.getElementById('Ano_5')
const diretorLegendary = document.getElementById('Diretor_5')
const generosLegendary = document.getElementById('Genero_5')
const elencoLegendary = document.getElementById('Elenco_5')
const instagramLegendary = document.getElementById('instagram_5')

const preencherDadosLegendary = () =>{
  imagemLegendary.setAttribute("src", JSON[4].imagem)
  tituloLegendary.innerText = JSON[4].titulo
  anoLegendary.innerText = JSON[4].ano
  diretorLegendary.innerText = JSON[4].diretor
  generosLegendary.innerText = JSON[4].generos
  elencoLegendary.innerText = JSON[4].elenco
  instagramLegendary.setAttribute("href", JSON[4].instagram)

}
preencherDadosLegendary()















