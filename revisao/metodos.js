const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

// ## Métodos de iteração

// find()

const buscarPrimeiro = numeros.find((elemento) => elemento == 2)
// console.log(buscarPrimeiro)

// filter() 

const filtrarPor = numeros.filter((elemento) => elemento == 5)
// console.log(filtrarPor)

// map()

const executarParaTodos = numeros.map(elemento => elemento * 2)
console.log(executarParaTodos)
console.log(numeros)

// forEach()

const verTodos = numeros.forEach(elemento => {
  console.log(elemento * 2)
  return elemento * 2
})
console.log(verTodos)

// reduce()

const ReduzirPara = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual
);
console.log(ReduzirPara);

// ## Outros métodos de array:

// concat()
const arrayConcatenada = numeros.concat(1, [2, 3], "café");
console.log(arrayConcatenada); 

// push()
const adicionaNoFinal = numeros.push(2, 3);
console.log(adicionaNoFinal);
console.log(numeros)

// pop()
const removeUltimo = numeros.pop();
console.log(removeUltimo);
console.log(numeros)

// shift()
const removePrimeiro = numeros.shift();
console.log(removePrimeiro);

// unshift()
const adicionaNoInicio = numeros.unshift(4, 1);
console.log(adicionaNoInicio);

// slice()
const copiaParte = numeros.slice(2, 5);
console.log(copiaParte);

// splice()
const removeEAdiciona = numeros.splice(2, 0, 9);
console.log(removeEAdiciona); //retorno [4, 3] -> removidos
console.log(numeros);

// indexOf()
const localizaElemento = numeros.indexOf(2);
console.log(localizaElemento);

// includes()
const verificaSeExiste = numeros.includes(7);
console.log(verificaSeExiste);

// join()
const transformaString = numeros.join(" & ");
console.log(transformaString);
