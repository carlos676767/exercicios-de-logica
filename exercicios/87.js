let array = [2,2,3,2,4,5,7,9,2,4,3,3,4,2,2,4,4,4,4,5,5,5,5,2,5]

let dois = 2
let tres = 3
let quatro = 4
let cinco = 5
let sete = 7
let nove = 9

function somasDen() {
    let soma = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let soma5 = 0
    let soma6 = 0

    for(let i = 0; i < array.length; ++i){
        if (array[i] == dois) {
            ++soma
        } if (array[i] == tres) {
            ++soma2
        } if (array[i] == quatro) {
            ++soma3
        }if (array[i] == cinco) {
        ++soma4
        }if (array[i] == sete) {
            ++soma5
        } if (array[i] == nove) {
            ++soma6
        }
    } return {soma, soma2, soma3, soma4, soma5, soma6}
}

let resultado = somasDen()
console.log(`o numero ${dois} aparece ${resultado.soma} vezes`);
console.log(`o numero ${tres} aparece ${resultado.soma2} vezes`);
console.log(`o numero ${quatro} aparece ${resultado.soma3} vezes`);
console.log(`o numero ${cinco} aparece ${resultado.soma4} vezes`);
console.log(`o numero ${sete} aparece ${resultado.soma5} vezes`);
console.log(`o numero ${nove} aparece ${resultado.soma6} vezes`);
