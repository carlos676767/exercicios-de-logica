const quantoselemntos = parseInt(prompt(`Digite o numero de elemntos`))
let somar = 0
let resultado = 0
let array = []
for (let i = 0; i < quantoselemntos; i++) {
   let digite = parseInt(prompt(`Digite um numero`))
   somar+= digite
   media = somar/ digite
   if (media != array) {
    array.push(media)
   }
}

console.log(`a media de numeros e ${media.toFixed(3)}`);
console.log(array);