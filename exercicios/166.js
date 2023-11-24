function estaticas() {
    let mulheres = 0
    let pesohomem = 0
    let homens = 0
    let pesomulheres = 0
    let media = 0
    let somar = 0
    let maior = 0
    for (let i = 0; i <= 2; i++) {
        let sexo = prompt(`Digite [m] ou [h]`)
        let peso = Number(prompt(`Digite seu peso`))
        if (sexo === `m`) {
            ++mulheres
            pesomulheres = peso
            somar+= pesomulheres
            media = somar / mulheres
        }

        if (pesohomem > maior) {
            maior = pesohomem
        }
        
        if (sexo === `h`) {
            pesohomem = peso
        }

        if (pesohomem >= 100) {
            ++homens
        }
 
    } return{
        mulheres,
        homens, 
        media,
        maior
   }
    
}

let resultado = estaticas()
console.log(`O numero de mulheres e ${resultado.mulheres}`);
console.log(`exatamente ${resultado.homens} homens tem 100kg ou mais.`);
console.log(`a media do peso entre as mulheres e de ${resultado.media}`);
console.log(`O maior peso entre os homens e ${resultado.maior}`);