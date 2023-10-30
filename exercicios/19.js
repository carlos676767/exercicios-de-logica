                   //escreva um programa que peca ao usuario uma opcao para doar

confirm("|| Central de Doações ||\n\n" +
"Digite (1) para doar 30 reais\n" +
"Digite (2) para doar 50 reais\n" +
"Digite (3) para doar 10 reais\n" +
"Digite (4) para doar outros valores")
                              //entrada
let doar = parseInt(prompt("Digite um numero para doar"))
let nome = prompt(`Digite seu nome`)

                         //processamento/saida
switch(doar){
  case 1: {
    alert(` ${nome} Parabens voce fez uma doacao de 30$`)
    break
  }

  case 2: {
    alert(`${nome} Parabens voce fez uma doacao de 50$`)
    break
  }
  
  case 3: {
    alert(` ${nome} Parabens voce fez uma doacao de 10$`)
    break
  }
  case 4: {
    let pergunta = parseInt(prompt(`digite outro valor`))
    alert(` ${nome} Voce fez uma doacao de ${pergunta}, muito obrigado`)
    break
  }
  default: {
    alert(` ${nome} Digite uma opcao valida`)
    break
  }
} 




