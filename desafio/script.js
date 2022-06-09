/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries 
protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

let JSON = [
  {
    "imagem": "./images/pose.jpg",
    "titulo": "Pose",
    "ano": "2018",
    "diretor": "Ryan Murphy",
    "generos": ["Drama"],
    "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
    "instagram": "https://www.instagram.com/poseonfx/"
  },
  {
    "imagem": "./images/manhas.jpg",
    "titulo": "Manhãs de Setembro",
    "ano": "2021",
    "diretor": "Luis Pinheiro",
    "generos": ["Drama"],
    "elenco": ["Liniker", "Linn da Quebrada"], 
    "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
  },
  {
    "imagem": "./images/euphoria.jpg",
    "titulo": "Euphoria",
    "ano": "2019",
    "diretor": "Sam Levinson",
    "generos": ["Drama"],
    "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
    "instagram": "https://www.instagram.com/euphoria/"
  },
  {
    "imagem": "./images/veneno.jpeg",
    "titulo": "Veneno",
    "ano": "2020",
    "diretor": "Javier Ambrossi",
    "generos": ["Drama", "Biografia"],
    "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
    "instagram": "https://www.instagram.com/venenolaserie/"
  },
  {
    "imagem": "./images/legendary.jpg",
    "titulo": "Legendary",
    "ano": "2020",
    "diretor": "Rik Reinholdtsen",
    "generos": ["Reality Show", "Competição"],
    "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  },
]




const foto = document.getElementById('photography')
const nome = document.getElementById('title')
const ano = document.getElementById('year')
const diretor = document.getElementById('director')
const genero = document.getElementById('genre')
const elenco = document.getElementById('cast')
const instagram = document.getElementById('instagram')

const preencherDados = () => {
  foto.setAttribute('src', JSON[0].imagem)
  nome.innerText = JSON[0].titulo
  ano.innerText = JSON[0].ano
  diretor.innerText = JSON[0].diretor
  genero.innerText = JSON[0].generos
  elenco.innerText = JSON[0].elenco.join(' - ')
  instagram.setAttribute('href', JSON[0].instagram)
}
preencherDados()

const fotoDois = document.getElementById('photography2')
const nomeDois = document.getElementById('title2')
const anoDois = document.getElementById('year2')
const diretorDois = document.getElementById('director2')
const generoDois = document.getElementById('genre2')
const elencoDois = document.getElementById('cast2')
const instagramDois = document.getElementById('instagram2')

const preencherDados2 = () => {
  fotoDois.setAttribute('src', JSON[1].imagem)
  nomeDois.innerText = JSON[1].titulo
  anoDois.innerText = JSON[1].ano
  diretorDois.innerText = JSON[1].diretor
  generoDois.innerText = JSON[1].generos
  elencoDois.innerText = JSON[1].elenco.join(' - ')
  instagramDois.setAttribute('href', JSON[1].instagram)
}

preencherDados2()

const fotoTres = document.getElementById('photography3')
const nomeTres = document.getElementById('title3')
const anoTres = document.getElementById('year3')
const diretorTres = document.getElementById('director3')
const generoTres = document.getElementById('genre3')
const elencoTres = document.getElementById('cast3')
const instagramTres = document.getElementById('instagram3')

const preencherDados3 = () => {
  fotoTres.setAttribute('src', JSON[2].imagem)
  nomeTres.innerText = JSON[2].titulo
  anoTres.innerText = JSON[2].ano
  diretorTres.innerText = JSON[2].diretor
  generoTres.innerText = JSON[2].generos
  elencoTres.innerText = JSON[2].elenco.join(' - ')
  instagramTres.setAttribute('href', JSON[2].instagram)
}

preencherDados3()

const fotoQuatro = document.getElementById('photography4')
const nomeQuatro = document.getElementById('title4')
const anoQuatro = document.getElementById('year4')
const diretorQuatro = document.getElementById('director4')
const generoQuatro = document.getElementById('genre4')
const elencoQuatro = document.getElementById('cast4')
const instagramQuatro = document.getElementById('instagram4')

const preencherDados4 = () => {
  fotoQuatro.setAttribute('src', JSON[3].imagem)
  nomeQuatro.innerText = JSON[3].titulo
  anoQuatro.innerText = JSON[3].ano
  diretorQuatro.innerText = JSON[3].diretor
  generoQuatro.innerText = JSON[3].generos
  elencoQuatro.innerText = JSON[3].elenco.join(' - ')
  instagramQuatro.setAttribute('href', JSON[3].instagram)
}

preencherDados4()

const fotoCinco = document.getElementById('photography5')
const nomeCinco = document.getElementById('title5')
const anoCinco = document.getElementById('year5')
const diretorCinco = document.getElementById('director5')
const generoCinco = document.getElementById('genre5')
const elencoCinco = document.getElementById('cast5')
const instagramCinco = document.getElementById('instagram5')

const preencherDados5 = () => {
  fotoCinco.setAttribute('src', JSON[4].imagem)
  nomeCinco.innerText = JSON[4].titulo
  anoCinco.innerText = JSON[4].ano
  diretorCinco.innerText = JSON[4].diretor
  generoCinco.innerText = JSON[4].generos
  elencoCinco.innerText = JSON[4].elenco.join(' - ')
  instagramCinco.setAttribute('href', JSON[4].instagram)
}

preencherDados5()