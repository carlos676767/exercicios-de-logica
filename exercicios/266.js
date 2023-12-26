function nomes() {
    let nome
    let idade = 0
    let comparaco = 0
    let pessoa 
    for (let i = 0; i < 5; i++) {
      nome = prompt(`Digite seu nome`)
      idade = parseInt(prompt(`Digite uma idade`))

      if (idade > comparaco) {
        comparaco = idade
        pessoa = nome
      }
    }

    alert(`A pessoa mais velha e ${pessoa}`)
}

nomes();