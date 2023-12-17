//funcao normal
function somar(a,b) {
    return a+b
}



//arrow function 
let somarComArrowFunction = (a,b) => {
    return a+b
}



let n5 = 1
console.log(n5);

//escopo de linha
const escopo = () => {
    if (true) {
        let n5 = 10
        console.log(n5);
    }
    if (true) {
        let n5 = 15
        console.log(n5);
    }
    if (true) {
        let n5 = 20
        console.log(n5);
    }
}

escopo()
