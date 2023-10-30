                               //entrada
let nota1 = parseInt(prompt("Digite uma nota"))
let nota2 = parseInt(prompt("Digite outra nota"))
let nome = prompt("Digite seu nome")
                              //processamento
let media = (nota1 + nota2) / 2

                                 //entrada                     
if (media >= 10) {
    alert(`O aluno ${nome} tirou uma classificao (A) sua media foi de ${media}`)
} else if(media >= 8 && media <= 7){
    alert(`O aluno ${nome} tirou uma classificao (B) sua media foi de ${media}`)
} else if(media >= 6 && media <= 5){
    alert(`O aluno ${nome} tirou uma classificao (C), sua media foi de ${media}`)
}else if(media >= 4 && media <= 3){
    alert(`O aluno ${nome} tirou uma classificao (D), sua media foi de ${media}`)
}else if(media >= 2 && media <= 1){
    alert(`O aluno ${nome} tirou uma classificao (E), sua media foi de ${media}`)
} else{
    alert(`O aluno ${nome} tirou uma classificao (F), sua media foi de ${media}, reprovado`)
}