//funcao normal
function somarValor1(n) {
    return n * 2
}
console.log(somarValor1(2));

//arrow funtion
const somarValor2 = (n) => {
    return n * 2
}

console.log(somarValor2(2));

//arrow funtion que nao precisa de retorno e so usa uma linha
const somarValor3 = (n) => n * 2
console.log(somarValor3(2));

console.log(somarValor3(5));