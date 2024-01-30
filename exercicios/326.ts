let palavra: string = `carlos`
const palindromo = palavra.split(``).reverse().join(``)
console.log(palindromo)

if(palindromo === palavra){
  console.log(`E igual`)
}else{
  console.log(`nao e igual`)
}
