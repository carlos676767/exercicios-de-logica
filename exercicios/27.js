let pergunte = parseInt(prompt("Quer converter em quantas vezes?")) //entrada
let contador = 0 //entrada
while (contador < pergunte) {
    let reais = parseInt(prompt("Digite um valor")) //entrada
    let somar = reais * 5.06 //processamento
    console.log(somar)
    ++contador
}