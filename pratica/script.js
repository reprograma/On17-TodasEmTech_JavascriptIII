let objetoJson =[
 {
  nome: "Liniker",
  foto: "./images/liniker.jpg",
  generos: ["MPB", "Soul", "R&B", "Blues"],
  discografia: ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"],
  instagram: "https://www.instagram.com/linikeroficial/",
},
{
  nome: "Gloria Groove",
  foto: "./images/gloriagrove.jpg",
  generos: ["HipHop", "R&B", "Pop"],
  discografia: ["Lady Leste", "Affair", "Alegoria","Balão Mágico" ],
  instagram: "https://www.instagram.com/linikeroficial/",
}];

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript
const main = document.getElementById('main-wrapper')



const preencherDados = () => {
  objetoJson.map(function(obj){
    const card = document.createElement('div');
    card.className = 'infos-wrapper';
    const img = document.createElement('img');
    img.className = 'photography '
   const titulo = document.createElement('h1')
   titulo.innerText = obj.nome
   titulo.className = 'title'
   const paragrafoUm = document.createElement('p')
   paragrafoUm.innerText = `Gêneros: ${obj.generos}` 
   paragrafoUm.className = 'tipography'
   const paragrafoDois =  document.createElement('p')
   paragrafoDois.innerText = `Discografia: ${obj.discografia}`
   paragrafoDois.className = 'tipography'
   const instagram = document.createElement('a')
   instagram.setAttribute('href', obj.instagram)
   instagram.className ='fab fa-instagram'
 
img.setAttribute('src', obj.foto);
card.appendChild(img);
card.appendChild(titulo); 
card.appendChild(paragrafoUm);
card.appendChild(paragrafoDois);

card.appendChild(instagram);
 main.appendChild(card);

   

  })

}

preencherDados()
