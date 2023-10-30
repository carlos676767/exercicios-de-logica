

expressao = "2x^2 + 5x - 3"; //entrada

let coefiecinte =  expressao.match(/(-?\d+)x\^2\s*([+\-]\s*\d+)x\s*([+\-]\s*\d+)/); //processamento

if (coefiecinte) { //controle
    let coeficienteA = parseInt(prompt("Digite o valor de A")) //entrada
    let coeficienteB = parseInt(prompt("Digite o valor de B")) //entrada
    let coeficienteC = parseInt(prompt("Digite o valor de C")) //entrada
    alert(`o valor de A e de ${coeficienteA}`) //saida
    alert(`o valor de b e de ${coeficienteB}`) //saida
    alert(`o valor de C e de ${coeficienteC}`) //saida
    
}
