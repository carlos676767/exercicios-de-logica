function encontre() {
    let impar = []
    let array = [2, 7, 11, 8, 13, 6, 17, 22, 19];
    for (let i = 0; i < array.length; i++) {
      if (array[i] %2 !== 0) {
        impar.push(array[i])
      }  
    } return impar
}

let resultado = encontre()
console.log(`os numeros impares sao ${resultado}`);