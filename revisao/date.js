const hoje = new Date();

console.log(hoje); // 2022-05-29T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 29/05/2022 🤔

const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long', 
});