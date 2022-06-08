/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

let JSON = [
  {
    imagem: "./images/pose.jpg",
    titulo: "Pose",
    ano: "2018",
    diretor: "Ryan Murphy",
    generos: ["Drama"],
    elenco: [
      "Dominique Jackson",
      "Indya Moore",
      "Mj Rodriguez",
      "Angelica Ross",
      "Hailie Sahar",
    ],
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
    instagram: "https://www.instagram.com/euphoria/",
  },
  {
    imagem: "./images/veneno.jpeg",
    titulo: "Veneno",
    ano: "2020",
    diretor: "Javier Ambrossi",
    generos: ["Drama", "Biografia"],
    elenco: [
      "Daniela Santiago",
      "Jedet Sánchez",
      "Isabel Torres",
      "Lola Rodríguez",
      "Paca La Piraña",
    ],
    instagram: "https://www.instagram.com/venenolaserie/",
  },
  {
    imagem: "./images/legendary.jpg",
    titulo: "Legendary",
    ano: "2020",
    diretor: "Rik Reinholdtsen",
    generos: ["Reality Show", "Competição"],
    elenco: ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"],
    instagram: "https://www.instagram.com/legendarymax/",
  },
];

const cardContainer = document.querySelector("#main-box");

const preencherCard = JSON.forEach((elemento) => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("card");
  cardContainer.appendChild(divContainer);

  const image = document.createElement("img");
  image.setAttribute("src", elemento.imagem);
  image.classList.add("photography");
  divContainer.appendChild(image);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = `${elemento.titulo}`;
  divContainer.appendChild(title);

  const divInfo = document.createElement("div");
  divInfo.classList.add("info-card");
  divContainer.appendChild(divInfo);

  const year = document.createElement("p");
  year.classList.add("dynamic-text");
  year.classList.add("text");
  year.innerHTML = `<b class = "text">Ano: </b> ${elemento.ano}`;
  divInfo.appendChild(year);

  const director = document.createElement("p");
  director.classList.add("dynamic-text");
  director.classList.add("text");
  director.innerHTML = `<b class = "text">Diretor: </b> ${elemento.diretor}`;
  divInfo.appendChild(director);

  const gender = document.createElement("p");
  gender.classList.add("dynamic-text");
  gender.classList.add("text");
  gender.innerHTML = `<b class = "text">Gêneros: </b> ${elemento.generos}`;
  divInfo.appendChild(gender);

  const socialmidia = document.createElement("a");
  socialmidia.classList.add("social");
  socialmidia.setAttribute("href", elemento.instagram);
  socialmidia.setAttribute("target", "blank");
  socialmidia.innerHTML = `<p class= "social"> Instagram`;
  divInfo.appendChild(socialmidia);
});

preencherCard();
