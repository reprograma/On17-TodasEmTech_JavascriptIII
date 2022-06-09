const productContainers = [...document.querySelectorAll('.container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let json = [
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

const foto = document.getElementById('model1');
const titulo = document.getElementById('title1');
const ano = document.getElementById('year1');
const diretor = document.getElementById('director1');
const generos = document.getElementById('genre1');
const elenco = document.getElementById('cast1');

const foto2 = document.getElementById('model2');
const titulo2 = document.getElementById('title2');
const ano2 = document.getElementById('year2');
const diretor2 = document.getElementById('director2');
const generos2 = document.getElementById('genre2');
const elenco2 = document.getElementById('cast2');

const foto3 = document.getElementById('model3');
const titulo3 = document.getElementById('title3');
const ano3 = document.getElementById('year3');
const diretor3 = document.getElementById('director3');
const generos3 = document.getElementById('genre3');
const elenco3 = document.getElementById('cast3');

const foto4 = document.getElementById('model4');
const titulo4 = document.getElementById('title4');
const ano4 = document.getElementById('year4');
const diretor4 = document.getElementById('director4');
const generos4 = document.getElementById('genre4');
const elenco4 = document.getElementById('cast4');

const foto5 = document.getElementById('model5');
const titulo5 = document.getElementById('title5');
const ano5 = document.getElementById('year5');
const diretor5 = document.getElementById('director5');
const generos5 = document.getElementById('genre5');
const elenco5 = document.getElementById('cast5');


const preencherDados = () => {
  for (var i=0; i == 0; i++){
    titulo.innerText = json[i].titulo;
    foto.setAttribute('src', json[i].imagem);
    ano.innerText = json[i].ano;
    diretor.innerText = json[i].diretor;
    generos.innerText = json[i].generos;
    elenco.innerText = json[i].elenco;
  }

  for (var i=1; i == 1; i++){
    titulo2.innerText = json[i].titulo;
    foto2.setAttribute('src', json[i].imagem);
    ano2.innerText = json[i].ano;
    diretor2.innerText = json[i].diretor;
    generos2.innerText = json[i].generos;
    elenco2.innerText = json[i].elenco;
  }

  for (var i=2; i == 2; i++){
    titulo3.innerText = json[i].titulo;
    foto3.setAttribute('src', json[i].imagem);
    ano3.innerText = json[i].ano;
    diretor3.innerText = json[i].diretor;
    generos3.innerText = json[i].generos;
    elenco3.innerText = json[i].elenco;
  }

  for (var i=3; i == 3; i++){
    titulo4.innerText = json[i].titulo;
    foto4.setAttribute('src', json[i].imagem);
    ano4.innerText = json[i].ano;
    diretor4.innerText = json[i].diretor;
    generos4.innerText = json[i].generos;
    elenco4.innerText = json[i].elenco;
  }

  for (var i=4; i == 4; i++){
    titulo5.innerText = json[i].titulo;
    foto5.setAttribute('src', json[i].imagem);
    ano5.innerText = json[i].ano;
    diretor5.innerText = json[i].diretor;
    generos5.innerText = json[i].generos;
    elenco5.innerText = json[i].elenco;
  }
}
preencherDados()

