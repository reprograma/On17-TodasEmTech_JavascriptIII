const aluna = {
  nome: { primeiro: "Lilit", segundo: "Bandeira" },
  "idade da aluna": 32,
  cidade: "Recife",
  interesses: ["música", "animes"],
  saudacao: (nome) => console.log(`olá ${nome}`),
};

// notação de ponto

console.log(aluna.interesses[1])
aluna.saudacao('Nana')

// notação colchetes

console.log(aluna['nome']['segundo'])

// desestruturando objetos

let { nome , interesses } = aluna

let { segundo } = nome 

console.log(segundo)
