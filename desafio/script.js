const movies = [
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

function movieCard(movie) {
  return `
  <div class ="posters">
    <img src="${movie.imagem}" class="photography">
    <h2 class = "subtitle">${movie.titulo}</h2>
  </div>
  <div class="infos-wrapper">
    <p class="tipography">Ano: ${
      movie.ano
    }<br /><span class="dynamic-text"></span></p>
    <hr />
    <p class="tipography">Diretor: ${
      movie.diretor
    } <br /><span class="dynamic-text"></span></p>
    <hr />
    <p class="tipography">Gêneros: ${movie.generos.join(
      ", "
    )} <br /><span class="dynamic-text" id="gender"></span></p>
    <hr />
    <p class="tipography">Elenco: ${movie.elenco.join(
      ", "
    )}<br /><span class="dynamic-text"></span></p>
    <hr />
    <a target="_blank" href="${
      movie.instagram
    }"><i class="fab fa-instagram"></i></a>
  </div>
  `;
}

function renderCarousel() {
  const container = document.querySelector(".carousel-inner");

  movies.forEach((movie, index) => {
    $(
      '<li data-target="#carousel" data-slide-to="' + index + '"></li>'
    ).appendTo(".carousel-indicators");
    const movieCardHtml = movieCard(movie);
    const outerWrapper = document.createElement("div");
    const wrapper = document.createElement("div");
    wrapper.classList.add("cards");
    outerWrapper.appendChild(wrapper);
    outerWrapper.classList.add("carousel-item");
    wrapper.innerHTML = movieCardHtml;
    container.appendChild(outerWrapper);
  });

  $(".carousel-item").first().addClass("active");
  $(".carousel-indicators > li").first().addClass("active");
  $("#carousel").carousel({ interval: false });
}

window.onload = renderCarousel;