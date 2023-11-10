let somar = 0;
let contador = 0;
let idade5 = 0;
let maior = 0;

for (let i = 0; i < 10; ++i) {
    let idade = parseInt(prompt(`Digite sua idade`));
    somar += idade;

    if (idade >= 18) {
        ++contador;
    } else if (idade < 5) {
        ++idade5;
    }

    if (idade > maior) {
        maior = idade;
    }
}

let media = somar / 10; // Calcular a média corretamente fora do loop

console.log(`A média de idade é ${media}`);
console.log(`Exatamente ${contador} têm mais de 18 anos`);
console.log(`Exatamente ${idade5} têm menos de 5 anos`);
console.log(`A maior idade lida foi ${maior}`);
