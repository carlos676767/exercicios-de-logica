
let resultado = encontrarpequenos()
console.log(`${resultado}`);
function encontrarpequenos() {
    let array = [10,9,8,7,6,5,4,3,2,1]
    for(let i = 0; i < array.length; ++i){
        array.sort((o,p) => o - p)
    } return array
}

//sem loop

let array1 = [10,9,8,7,6,5,4,3,2,1]
array1[0] = 1
array1[1] = 2
array1[2] = 3
array1[3] = 4
array[4] = 5
array[5] = 6
array[6] = 7
array[7] = 8
array[8] = 9
array[9] = 10

console.log(array1);
