let saldo = parseInt(prompt(`Digite o saldo`))
let debito = parseInt(prompt(`Digite o debito`))
let credito = parseInt(prompt(`Digite o debito`))

let totalsaldo = saldo - debito + credito

if (totalsaldo >= 0) {
    console.log(`saldo positivo`);
} else{
    console.log(`Saldo negativo`);
}