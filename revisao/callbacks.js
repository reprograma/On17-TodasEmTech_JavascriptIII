function calcular(a, b, callback) {
  return callback(a, b)
}

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// com arrow fuction

const calcular = (a, b, callback) => callback(a, b);
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log(calcular(7, 3, multiplicar));
