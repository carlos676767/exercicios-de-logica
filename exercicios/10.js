                                 //tenho X IDADE POSSO DIRIGIR?
                                            
                                                     //entrada

let anodenascimento = parseInt(prompt("digite seu anodenascimento"))
let anoatual = parseInt(prompt("digite o ano atual"))

                                            //processamento

let idade = anoatual - anodenascimento


                                            //controle


if (idade >= 18) {
    alert("Voce ja pode dirigir")
} else{
    alert("Voce nao pode")
}

