const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

console.log(numeros.length)

for(let i = 0; i < numeros.length; i++) {
  let dobro = 2 * numeros[i]
  console.log(dobro)
}

let i = 0;
while(i < numeros.length) {
  let dobro = 2 * numeros[i]
  console.log(dobro)
  i++
}

for (let numero of numeros) {
  let dobro = 2 * numero
  console.log(dobro)
}
