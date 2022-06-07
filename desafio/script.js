
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
  
  const cardsContainer = document.querySelector(".cardsContainer");
  
  const updatedCards = JSON.forEach((el) => {
    let cards = document.createElement("div");
    cards.classList.add("cards");
    cardsContainer.appendChild(cards);
  
    let image = document.createElement("img");
    image.setAttribute("src", el.imagem);
    cards.appendChild(image);
  
    let title = document.createElement("h3");
    title.innerHTML = el.titulo;
    cards.appendChild(title);
  
    let ano = document.createElement("p");
    ano.innerHTML = `<b>Ano</b>: ${el.ano}`;
    cards.appendChild(ano);
  
    let diretor = document.createElement("p");
    diretor.innerHTML = `<b>Diretor</b>: ${el.diretor}`;
    cards.appendChild(diretor);
  
    let generos = document.createElement("p");
    generos.innerHTML = `<b>Gêneros</b>: ${el.generos.join(' - ')}`;
    cards.appendChild(generos);
  
    let elenco = document.createElement("p");
    elenco.innerHTML = `<b>Elenco</b>: ${el.elenco.join(", ")}`;
    cards.appendChild(elenco);
  
    let instagram = document.createElement("span");
    instagram.innerHTML = `<b>Instagram</b>: ${el.instagram}`;
    cards.appendChild(instagram);
  }); 