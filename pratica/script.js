const objetoJson = {
  nome: "Liniker",
  foto: "./images/liniker.webp",
  generos: ["MPB", "Soul", "R&B", "Blues"],
  discografia: ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"],
  instagram: "https://www.instagram.com/linikeroficial/",
};

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript

const foto = document.getElementById('photography')
const titulo = document.getElementById('title')
const generos = document.getElementById('gender')
const discografia = document.getElementById('discography')
const instagram = document.getElementById('instagram')

const preencherDados = () => {
  foto.setAttribute('src', objetoJson.foto)
  titulo.innerText = objetoJson.nome // inner text altera o texto do elemento
  generos.innerHTML = objetoJson.generos.join(' - ') // altera o html do elemeto
  discografia.innerText = objetoJson.discografia.join(' - ')
  instagram.setAttribute('href', objetoJson.instagram)
}

preencherDados()


