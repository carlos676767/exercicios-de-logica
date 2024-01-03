const media = () => {
    let n1 = parseInt(prompt(`dIGITE UM NUMERO`))
    let n2 = parseInt(prompt(`digite outro numero`))
    let n3 = parseInt(prompt(`digite outro numero`))

    let media = (n1+n2+n3)/3

    if (media >= 5) {
        alert(`aprovado`)
    }else if (media <= 5) {
        alert(`reprovado`)
    }
}

media()