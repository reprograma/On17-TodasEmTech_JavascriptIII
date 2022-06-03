/* 
O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;
*/

const dataSeries = [
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
  }
]

const main = document.querySelector("main");

// for(i=0; i<=dataSeries.length-1; i+=1){
dataSeries.forEach((item, index) => {
  console.log(item.imagem)

  const ul = document.createElement("ul");
  main.appendChild(ul);
  const liImagem = document.createElement("li");
  const imagem = document.createElement("img");
  ul.appendChild(liImagem);
  liImagem.appendChild(imagem);
  imagem.src = item.imagem;
  imagem.setAttribute("alt", item.titulo);
  imagem.classList.add("imagens");

  const liTitulo = document.createElement("li");
  ul.appendChild(liTitulo);
  const nomeSerie = document.createElement("h2");
  liTitulo.appendChild(nomeSerie);
  nomeSerie.innerHTML = `<strong>Título: </strong> ${item.titulo}`;

  const liAno = document.createElement("li");
  ul.appendChild(liAno);
  liAno.innerHTML = `<strong>Ano: </strong> ${item.ano}`;

  const liDiretor = document.createElement("li");
  ul.appendChild(liDiretor);
  liDiretor.innerHTML = `<strong>Diretor: </strong> ${item.diretor}`;

  const liGeneros = document.createElement("li");
  ul.appendChild(liGeneros);
  liGeneros.innerHTML = `<strong>Gênero: </strong> ${item.generos}`;

  const liElenco = document.createElement("li");
  ul.appendChild(liElenco);
  liElenco.innerHTML = `<strong>Elenco: </strong> ${item.elenco}`;

  const liInstagram = document.createElement("li");
  ul.appendChild(liInstagram);
  const linkInstagram = document.createElement("a");
  const iconInstagram = document.createElement("img");
  liInstagram.appendChild(linkInstagram);
  linkInstagram.appendChild(iconInstagram);
  linkInstagram.setAttribute("href", item.instagram);
  linkInstagram.setAttribute("target", "_blank");
  iconInstagram.src = "./images/icon-instagram.png";
  iconInstagram.classList.add("icon");
})
// }