
let somar = 0
while(true){
    let n1 = parseInt(prompt("Digite um numero"))
    if (n1 == 0) {
        alert(`Programa encerrado`)
        break
    }

    for (let i = 0; i < 5; i++) {
      if (n1 % 2 == 0 || n1 % 2 !== 0) {
        let resultado = n1 * (i * 2 + 2)
        console.log(resultado)
      }  
    }
}



