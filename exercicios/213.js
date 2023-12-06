// Inicializa os vetores para armazenar números pares e ímpares
let numerosPares = [];
let numerosImpares = [];

// Preenche os vetores com 20 números aleatórios cada
for (let i = 0; i < 20; i++) {
    numerosPares.push(Math.floor(Math.random() * 99)); // Adiciona número par ao vetor numerosPares
    numerosImpares.push(Math.floor(Math.random() * 99)); // Adiciona número ímpar ao vetor numerosImpares
}

// Inicializa um novo vetor para armazenar os números filtrados
let numerosFiltrados = [];

// Verifica se os vetores numerosPares e numerosImpares têm o mesmo comprimento
if (numerosPares.length === numerosImpares.length) {
    // Itera pelos vetores simultaneamente e filtra os números pares e ímpares
    for (let i = 0; i < numerosPares.length; i++) {
        // Se o número em numerosPares na posição i for par, adiciona ao vetor numerosFiltrados
        if (numerosPares[i] % 2 === 0) {
            numerosFiltrados.push(numerosPares[i]);
        }
        // Se o número em numerosImpares na posição i for ímpar, adiciona ao vetor numerosFiltrados
        if (numerosImpares[i] % 2 !== 0) {
            numerosFiltrados.push(numerosImpares[i]);
        }
    }
}

// Exibe o vetor resultante com os números pares e ímpares filtrados
console.log(numerosFiltrados);

