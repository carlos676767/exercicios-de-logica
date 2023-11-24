const totalmacas = parseInt(prompt(`Digite o total de macas`))



if (totalmacas >= 12) {
    let valor2 = 1.00 * totalmacas
    console.log(`Acima de 12 voce pagara ${valor2}`);
}else{
    let valor2 = 1.30 * totalmacas
    console.log(`O valor a pagar por 6 ou mais macas e de ${valor2}`);
}