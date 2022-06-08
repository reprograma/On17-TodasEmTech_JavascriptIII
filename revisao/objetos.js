const aluna = {
  nome: {primeiro: "Mayara",  segundo: "Rocha"},
  "idade da aluna": 26,
  cidade: "Guarulhos",
  interesses: ["músicas","séries"],
  saudacao: (nome) => console.log(`Olá ${nome}`),
};
// Desestruturando um objeto
let { nome, interesses } = aluna

let { segundo} = nome

console.log(segundo)

// notação de ponto

// console.log(aluna.interesses[1])
 //aluna.saudacao('Lara')

 // notação colchetes

//console.log(aluna['nome']['segundo'])