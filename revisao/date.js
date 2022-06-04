const hoje = new Date()

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

// console.log(`${dia}/${mes + 1}/${ano}`)

// toLocaleDateSting()

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
 }

const dataFormatada = hoje.toLocaleDateString("pt-BR", options);

console.log(dataFormatada)
