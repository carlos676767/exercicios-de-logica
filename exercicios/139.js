let idades = []
let vinte1 = []
let somar = 0

while(true){
    let digitequantos = parseInt(prompt(`Digite varias idades \n use [0] para parar o loop`))
    idades.push(digitequantos)

    if (isNaN(digitequantos) || digitequantos < 0) {
        alert(`Digite um valor valido`)
    }
    if (digitequantos === 0) {
        console.log(`Programa encerrado`);
        break
    }
}

for (let i = 0; i < idades.length; i++) {
    somar += idades[i]
    if (idades[i] == 21) {
        vinte1.push(idades[i])
    }
}

let media = somar / idades.length
console.log(`o total de idade digitadas e ${idades.length}`);
console.log(`a media de idades e ${media}`);
console.log(`O total de pessoas com 21 anos e de ${vinte1.length}`);