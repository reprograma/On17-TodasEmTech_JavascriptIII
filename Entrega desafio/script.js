/*3. Usei o exemplo da sala para guiar nesta construção;
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