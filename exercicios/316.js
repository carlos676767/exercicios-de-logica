const nomeProduto = prompt(`Digite o nome do produto`)
const quantidade = parseInt(prompt(`Digite a quantidade do produto`))
const precoUnitario = parseInt(prompt(`Digite o preco unitario`))
const total = quantidade * precoUnitario

if (quantidade <= 5) {
    const totalApagar = total - 0.2
    console.log(`o desconto sera de ${totalApagar}`);
}else if (quantidade > 5) {
    const totalApagar = total - 0.10
    console.log(`o desconto sera de ${totalApagar}`);
}else if (quantidade > 10) {
    const totalApagar = total - 0.5
    console.log(`o desconto sera de ${totalApagar}`);
}else{
    console.log(`Digite um valor correto.`);
}