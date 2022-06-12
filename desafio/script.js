/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
const imagem = document.getElementById('imagem')
const titulo = document.getElementById('title')
const ano = document.getElementById('ano')
const diretor = document.getElementById('diretor')
const generos = document.getElementById('gender')
const elenco = document.getElementById('elenco')
const instagram = document.getElementById('instagram')

const preencherDados = () => {
  imagem.setAttribute('src', objetoJson.imagem)
  titulo.innerText = objetoJson.nome
  ano.innerHTML  = objetoJson.ano.join(' - ')
  diretor.innerHTML = objetoJson.diretor.join(' - ')
  generos.innerHTML = objetoJson.generos.join(' - ')
  elenco.innerHTML = objetoJson.elenco.join(' - ')
  instagram.setAttribute('href', objetoJson.instagram)
}

preencherDados()