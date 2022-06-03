let JSON = [
  {
    "image": "./images/pose.jpg",
    "title": "Pose",
    "year": "2018",
    "director": "Ryan Murphy",
    "genre": ["Drama"],
    "cast": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"],
  },
  {
    "image": "./images/manhas.jpg",
    "title": "Manhãs de Setembro",
    "year": "2021",
    "director": "Luis Pinheiro",
    "genre": ["Drama"],
    "cast": ["Liniker", "Linn da Quebrada"],
  },
  {
    "image": "./images/euphoria.jpg",
    "title": "Euphoria",
    "year": "2019",
    "director": "Sam Levinson",
    "genre": ["Drama"],
    "cast": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"],
  },
  {
    "image": "./images/veneno.jpeg",
    "title": "Veneno",
    "year": "2020",
    "director": "Javier Ambrossi",
    "genre": ["Drama", "Biografia"],
    "cast": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"],
  },
  {
    "image": "./images/legendary.jpg",
    "title": "Legendary",
    "year": "2020",
    "director": "Rik Reinholdtsen",
    "genre": ["Reality Show", "Competição"],
    "cast": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"],
  }
]

var cardContainer = document.querySelector(".display");

function showCards() {
  JSON.forEach((obj) => {
    let div = document.createElement("div");
    div.className = "card";
    cardContainer.appendChild(div);

    let createLine = () => { /* Criando "linhas" entre os elementos percorridos para maior legibilidade no browser. */
      let line = document.createElement("hr"); /* Não encontrei solução "melhor" do que usar a tag hr dessa forma para criar as "linhas". */
      div.appendChild(line);
    }

    let img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.className = "image";
    div.appendChild(img);

    let title = document.createElement("h2");
    title.className = "cardTitle";
    title.innerText = `${obj.title}`;
    div.appendChild(title);

    createLine();

    let year = document.createElement("p");
    year.innerText = `${obj.year}`;
    div.appendChild(year);

    createLine();

    let director = document.createElement("p");
    director.innerText = `${obj.director}`;
    div.appendChild(director);

    createLine();

    let genre = document.createElement("p");
    genre.innerText = `${obj.genre.join(", ")}`; /* Utilizando o join(", ") para dar virgula e espaçamento ao objeto chamado para fins de legibilidade no browser. */
    div.appendChild(genre);

    createLine();

    let cast = document.createElement("p");
    cast.innerText = `${obj.cast.join(", ")}`;
    div.appendChild(cast);
  });
}

showCards();