let digiteamedidadaglicose = Number(prompt("Digite a medida da glicose"))


if(digiteamedidadaglicose <= 100){
    alert(`Classificacao: normal`)
} else if(digiteamedidadaglicose >= 100 && digiteamedidadaglicose <= 140){
alert(`Classificacao: elevado `)
} else{
    alert(`Diabetes`)
}

