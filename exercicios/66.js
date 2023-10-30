let idade1 = parseInt(prompt("Digite uma idade"))
let idade2 = parseInt(prompt("Digite outra idade"))
let idade3 = parseInt(prompt("Digite mais uma idade"))
let idade4 = parseInt(prompt("Digite mais outra idade"))

let media = (idade1 + idade2 + idade3) / 3
media = media.toFixed(2)

if (idade4 < 0) {
    alert(`impossivel calcular`)
} else{
    alert(`A media de idade e de ${media}`)
}

