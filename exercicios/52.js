//entrada
let A = Number(prompt("Digite a medida A"))
let B = Number(prompt("Digite a medida B"))
let C = Number(prompt("Digite a medida C"))

                      //área 

let area = A * A
area = area.toFixed(4)

                  //AREA DO TRIANGULO


let AreadoTriangulo = (B * A)/ 2

AreadoTriangulo = AreadoTriangulo.toFixed(4)

                  //AREA DO TRAPEZIO

let trapezio = (A+ B) * C/ 2
trapezio = trapezio.toFixed(4)

console.log(`A area do quadrado é de ${area}`)
console.log(`a area do triangulo é de ${AreadoTriangulo}`)
console.log(`A area do trapézio é de ${trapezio}`)