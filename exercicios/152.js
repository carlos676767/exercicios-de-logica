function calcularEstatisticasPessoais() {
    let somaIdades = 0;
    let mediaIdades = 0;
    let contadorMaiorOuIgual18 = 0;
    let contadorMenorIgual5 = 0;
    let maiorIdade = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= 10; i++) {
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i}`));
        somaIdades += idade;
        mediaIdades = somaIdades / 10;

        if (idade >= 18) {
            ++contadorMaiorOuIgual18;
        }
        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
        if (idade <= 5) {
            ++contadorMenorIgual5;
        }
    }

    return {
        mediaIdades: mediaIdades,
        quantidadeMaiorOuIgual18: contadorMaiorOuIgual18,
        maiorIdade: maiorIdade,
        quantidadeMenorIgual5: contadorMenorIgual5
    };
}

let estatisticas = calcularEstatisticasPessoais();

console.log(`A média de idades é ${estatisticas.mediaIdades}`);
console.log(`A quantidade de pessoas com 18 anos ou mais é ${estatisticas.quantidadeMaiorOuIgual18}`);
console.log(`A maior idade é ${estatisticas.maiorIdade}`);
console.log(`A quantidade de pessoas com menos de 5 anos é ${estatisticas.quantidadeMenorIgual5}`);