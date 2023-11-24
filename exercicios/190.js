let vetor = []
for (let i = 0; i < 7; i++) {
  const nomes = prompt(`Digite seu nome`)
  vetor.push(nomes)
}

function ordernar(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        } 
       }   
    }
    return array
}

console.log(ordernar(vetor));