const array: number[] = [10, 10, 5]
let novoAarray: number[] = []
for (let j = 0; j < array.length; j++) {
    if(!novoAarray.includes(array[j])){
        novoAarray.push(array[j])
    }
}


console.log(novoAarray)