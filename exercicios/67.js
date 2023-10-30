while (true) {
    let nota1 = parseFloat(prompt("Digite uma nota"))
    let nota2 = parseFloat(prompt("Digite outra nota"))
    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
        let media = (nota1 + nota2) / 2
      alert(`a media de notas e de ${media}`)
      break
    } else{
        alert(`Digite um valor valido`)
    }
}



