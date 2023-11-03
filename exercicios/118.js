let seuano = parseInt(prompt(`Digite seu ano de nascimento`))

let anoatual = new Date().getFullYear()

let somar = anoatual - seuano

if (somar >= 18) {
    alert(`Voce ja pode votar`)
} else{
    alert(`Voce nao pode votar`)
}