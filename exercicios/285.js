const comprarMacas = () => {
    const macas = parseInt(prompt(`Digite o total de macas`))

    if (macas >= 12) {
        const duzia = macas * 1.00
        alert(`Como voce comprou ${macas} entao pagara ${duzia}`)
    }else{
        const meiaDuzia = macas * 1.30
        alert(`Como voce comprou ${macas} entao pagara ${meiaDuzia}`)
    }
}

comprarMacas()