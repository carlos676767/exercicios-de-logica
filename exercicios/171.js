// Inicia as variáveis
let contador = 0;
let somar = 0;
let pesos = 0;
let informacoes = 0;
let umeniventa = 0;

// Faz o loop
do {
    ++contador;
    let peso = Number(prompt(`Digite um peso`));
    let altura = Number(prompt(`Digite sua altura`));
    somar += peso;

    if (isNaN(peso) && isNaN(altura) && peso < 0 && altura < 0) {
        alert(`Digite uma entrada válida.`);
    } else if (peso >= 90) {
        ++pesos;
    } else if (peso <= 50 && altura >= 1.60) {
        ++informacoes;
    } else if (altura >= 1.90 && peso >= 100) {
        ++umeniventa;
    } else {
        alert(`Dados não encontrados.`);
    }
} while (contador <= 7);

// Faz o cálculo da média
let media = somar / 7;
console.log(`A média de peso é de ${media}`);

// Exibe o total de pessoas com peso maior ou igual a 90
console.log(`O número total de pessoas com peso maior ou igual a 90 é de ${pesos}`);

// Exibe quantas pessoas pesam menos de 50kg e têm menos de 1.60m
console.log(`O total de pessoas com menos de 50kg e 1.60m de altura é de ${informacoes}`);

// Inicia uma variável para ver quem tem mais de 100kg e quem tem 1.90 ou mais
console.log(`Exatamente ${umeniventa} tem mais de 1.90 e 100kg`);





