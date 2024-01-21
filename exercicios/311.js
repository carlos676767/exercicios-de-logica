function media(n1,n2) {
    let somar = n1+n2
    let media = somar / 2
    return media
}

let n1 = parseInt(prompt(`Digite uma nota`))
let n2 = parseInt(prompt(`Digite outra`))

let result = media(n1,n2)

function situacao(media) {
    if (media >= 3) {
        alert(`aprovado`)
    }
}

situacao(result)
