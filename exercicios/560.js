const array = [3,0,5,0,4,5,0,2,4,1,9]

for (let i = 0; i < array.length; i++) {
  const valorEncontrado = '0'
  if(valorEncontrado.includes(array[i]))array.splice(i, 1),array.push(Number(valorEncontrado))
}

console.log(array)