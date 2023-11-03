//entrada
let nomes = prompt(`Digite seu nome`)
let sexo = prompt(`Digite seu sexo`)
let compras = parseInt(prompt(`Digite o valor das compras`))


if (sexo === `m`) {
    let desconto = compras * 0.05
    let valor = compras - desconto
    alert(`Caro Sr. ${nomes}, como cliente do sexo masculino, você receberá um desconto de R$${valor.toFixed(2)}. O valor total a ser pago é de R$${valorComDesconto.toFixed(2)}.`);
}else if (sexo === `f`) {
    let desconto = compras * 0.13
    let valor = compras - desconto
    alert(`Cara Sra. ${nomes}, como cliente do sexo feminino, você receberá um desconto de R$${valor.toFixed(2)}. O valor total a ser pago é de R$${valorComDesconto.toFixed(2)}.`);
} else{
    alert(`Digite um sexo valido [F] ou [M]`)
}

