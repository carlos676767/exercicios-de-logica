const array = [4, 4, 1]
let pegar = 0
for (let i = 0; i < array.length; i++) {
  pegar ^= array[i]
}

console.log(pegar)