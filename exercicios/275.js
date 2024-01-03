function converterVelocidadeParaKmPorHora(velocidadeEmMetrosPorSegundo) {
    const velocidadeEmKmPorHora = velocidadeEmMetrosPorSegundo * 3.6;
    return velocidadeEmKmPorHora;
}

const velocidadeEmMetrosPorSegundo = parseFloat(prompt("Digite a velocidade em m/s:"));

if (!isNaN(velocidadeEmMetrosPorSegundo)) {
    const velocidadeEmKmPorHora = converterVelocidadeParaKmPorHora(velocidadeEmMetrosPorSegundo);
    console.log(`A velocidade de ${velocidadeEmMetrosPorSegundo} m/s é equivalente a ${velocidadeEmKmPorHora} km/h.`);
} else {
    console.log("Por favor, insira um valor numérico válido.");
}
