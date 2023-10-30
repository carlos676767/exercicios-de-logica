let horainicial = parseInt(prompt("Digite a hora"))
let horafinal = parseInt(prompt("Digite a hora final"))

                        //processamento 



let somar = (horafinal - horainicial+24) % 24
                       //controle
if (somar <= 0) {
    alert(`O jogo deu 24 horas`)
}else{
    alert(`O jogo deu ${somar} horas`)
}



