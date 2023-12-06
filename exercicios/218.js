let vetor = [8,3,1,2,3,4,5,2,3,4]


function ordernar(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
            
        }
     
    }
    return array
}

console.log(ordernar(vetor));