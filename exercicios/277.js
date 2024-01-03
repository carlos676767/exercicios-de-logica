const coeficiente = () => {
    let n1 = parseInt(prompt(`Digite um numero`))
    let n2 = parseInt(prompt(`Digite um numero outro n`))

    let quociente = n1 / n2
    let resto = n1% n2
    alert(`O resto da divisao e de ${resto}`)
    alert(`O quociente e de ${quociente}`)

   
}

coeficiente()