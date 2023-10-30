                            //passos

//escreva dois prompts um com o nome e dois com as notas]
//agora pegue os numeros some e divida
//agora use uma estrutura para falar se o aluno esta de recuperacao ou passou ou esta reprovado
                             //entrada


let nome = prompt("Digite seu nome")
let n1 = parseInt(prompt("Digite uma nota"))
let n2 = parseInt(prompt("Digite outra nota"))


                                //processamento

let media = (n1+n2)/2

                                  //controle

if (media >= 8) {
    alert(`O (A) aluno ${nome} passou de serie com a media de ${media}, parabens`)
} else if(media >= 4.5 && media <= 5){
    alert(`O (A) aluno ${nome} esta de recuperacao  sua media foi de ${media}, faca as atividades para tirar a media.`)
}else{
    alert(`O (A) aluno ${nome} esta reprovado, sua media foi de ${media}, tente novamente`)
}