/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

let objetosJson = [
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

const divPrincipal = document.getElementById("container");

const modificacaoCard = objetosJson.forEach((objeto) => {
  const div = document.createElement("div");
  div.className = "card";
  divPrincipal.appendChild(div);

  const imagem = document.createElement("img");
  imagem.setAttribute("src", objeto.imagem);
  imagem.className = "card_imagem";
  div.appendChild(imagem);

  const titulo = document.createElement("p");
  titulo.className = "card_titulo";
  titulo.innerText = `${objeto.titulo}`;
  div.appendChild(titulo);
  const hr = document.createElement("hr");
  div.appendChild(hr);


  const ano = document.createElement("p");
  ano.className = "ano_cad";
  ano.innerText = `Ano Lançamento: ${objeto.ano}`;
  div.appendChild(ano);

  const diretor = document.createElement("p");
  diretor.className = "diretor_card";
  diretor.innerText = `Diretor: ${objeto.diretor}`;
  div.appendChild(diretor);

  const generos = document.createElement("p");
  generos.className = "generos_card";
  generos.innerText = `Gênero: ${objeto.generos}`;
  div.appendChild(generos);

  const elenco = document.createElement("p");
  elenco.className = "elenco_card";
  elenco.innerText = `Elenco: ${objeto.elenco}`;
  div.appendChild(elenco);

});

modificacaoCard();



