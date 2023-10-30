                                   //entrada

let anoatual = parseInt(prompt("Digite o ano atual"))
let anodenascimento = parseInt(prompt("Digite o ano de nascimento"))


                                  //processamento
                            
let somar = anoatual - anodenascimento

                                     //saida
alert(`como voce nasceu em ${anodenascimento} este ano voce tera ${somar}`)


                                    //controle


if (somar >= 18) {
    alert("voce e maior de idade") //saida
}else{
    alert("voce nao e maior de idade") //saida
}





