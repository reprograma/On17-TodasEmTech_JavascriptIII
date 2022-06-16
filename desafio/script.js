/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

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

const container = document.querySelector('#container')

function printCards() {
  JSON.forEach(infoCard => {
    
    const eachCard = document.createElement('div')
    eachCard.setAttribute('class', 'each-card')

    const imgCard = document.createElement('img')
    imgCard.setAttribute('class', 'img-card')
    imgCard.setAttribute('src', infoCard.imagem)

    const title = document.createElement('h3')
    title.innerText = infoCard.titulo

    const year = document.createElement('p')
    year.setAttribute('class', 'info-style')
    year.innerText = infoCard.ano

    const director = document.createElement('p')
    director.setAttribute('class', 'info-style')
    director.innerText = infoCard.diretor

    const genders = document.createElement('span')
    genders.setAttribute('class', 'info-style')
    genders.innerText = infoCard.generos

    const cast = document.createElement('span')
    cast.setAttribute('class', 'info-style')
    cast. innerText = infoCard.elenco

    const instagram = document.createElement('img')
    instagram.setAttribute('class', 'insta-img')
    instagram.setAttribute('src', './images/icons8-instagram-96.png')

    const instaLink = document.createElement('a')
    instaLink.setAttribute('href', infoCard.instagram)

    instaLink.appendChild(instagram)


    container.appendChild(eachCard)
    eachCard.appendChild(imgCard)
    eachCard.appendChild(title)
    eachCard.appendChild(year)
    eachCard.appendChild(director)
    eachCard.appendChild(genders)
    eachCard.appendChild(cast)
    eachCard.appendChild(instaLink)

  });
}

printCards();