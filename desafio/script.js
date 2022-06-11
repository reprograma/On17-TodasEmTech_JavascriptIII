/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const JSON = [
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

const cardContainer = document.querySelector(".cards_container");
/*CRIAR FUNÇÃO PARA PREENCHER OS CARDS*/
function preencherCards() {
  JSON.forEach((obj) => {
    const div = document.createElement("div");
    div.className = "card";
    cardContainer.appendChild(div);

//REPETIR OS COMANDOS PARA TODOS OS ITENS PUXANDO AS ARRAYS//
  const img = document.createElement(img);
  img.setAttribute("scr", obj.imagem);
  img.className = "card_image"
  div.appendChild(img);

  const titulo = document.createElement("h2");
  titulo.className = "card_h2";
  titulo.innerText = '$obj.titulo]';
  div.appendChild(titulo);


  const hr = document.createElement("hr");
  div.appendChild(hr);

  const ano = document.createElement(p);
  ano.className = "ano"
  ano.innerText = '$[obj.ano]';
  div.appendChild(ano)

  const diretor = document.createElement(p);
  diretor.className = "diretor"
  diretor.innerText = '$[obj.diretor]';
  div.appendChild(diretor)

  const generos = document.createElement(p);
  generos.className = "generos"
  generos.innerText = '$[obj.generos]';
  div.appendChild(generos)

  const elenco = document.createElement(p);
  elenco.className = "elenco"
  elenco.innerText = '${obj.elenco}';
  div.appendChild(elenco)

  const hrDois = document.createElement("hr")
  div.appendChild(hrDois);

  const ancora = document.createElement("a")
  ancora.className = "card_ancora";
  ancora.setAttribute("href", obj.instagram);
  div.appendChild(ancora);
  
  const instagramImage = document.createElement("img");
  instagramImage.className = "instagram_image"
  instagramImage.setAttribute("src", "./images/instagram.png");
  
  ancora.appendChild(instagramImage);




  })
}

preencherCards();