
const array: number[] = [7, 9, 5, 1]

let maior: number = array[0]
let menor: number = array[0]


for (let i = 0; i < array.length; ++i) {
  if (array[i] < menor) {
    menor = array[i]
  } else {
    maior = array[i]
  }
}

console.log(menor)
console.log(maior)