                                //entrada

let contador = 0
                              //processamento
while(contador <= 4){
    let reais = parseInt(prompt("Digite um número"))
    let converter = reais * 4.98
    ++contador
    console.log(`A Conversao entre ${reais} reais em dolares e de ${converter}`)
    converter = converter.toFixed(0)
}