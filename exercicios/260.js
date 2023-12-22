function pesoIdeal() {
    let altura = parseFloat(prompt(`Digite sua altura`))
    let somar = (72.7 * altura ) - 58
    somar = somar.toFixed(2)
    alert(`o peso ideal para sua altura e ${somar}`);
}

pesoIdeal()

