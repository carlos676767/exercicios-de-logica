confirm(`||Partida de futebol \n Brasil X russia`)
//entrada 
let brasil = parseInt(prompt("Quantos gol do brasil?"))
let russia = parseInt(prompt("Quantos gol da russia?"))
//processamento
let somar = brasil - russia
//controle
if (somar == 0) {
  alert(`status; \n a diferenca de gols foi de ${somar} \n empate`) //saida
} else if(somar >= 2 && somar <= 4){
    alert(`status; \n a diferenca de gols foi de ${somar} \n partida normal`) //saida
} else if(somar >= 5 && somar <= 7){
    alert(` status; \n a diferenca de gols foi de ${somar} \n partida goleada.`) //saida
} else if(somar >= 10 && somar <= 20){
    alert(` status; \n a diferenca de gols foi de ${somar} \n melhor partida`) //saida
} else{
    alert(`Digite um numero nos inputs`)
}

