let n1 = parseInt(prompt(`digite um numero`))
let n2 = parseInt(prompt(`digite um numero`))
let n3 = parseInt(prompt(`digite um numero`))

let ordenar = [n1, n2, n3]

const ordenarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            } 
        }
        return array 
    }
}

console.log(ordenarArray(ordenar));