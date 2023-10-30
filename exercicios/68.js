let minutos = parseInt(prompt("Digite a quantidade em minutos"))


//processamento 


let taxa = 2

if (minutos >= 0 && minutos <= 100) {
    alert(`voce pagara apenas 50 reais`)
}else{
    let custo = (minutos - 100) * taxa
    alert(`Voce pagara 50 reais mais uma taxa de ${custo}`)
}
