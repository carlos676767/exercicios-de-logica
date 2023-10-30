
while (true) {
    let x = Number(prompt("Digite o valor de X (ou pressione Cancelar para sair):"));
    let y = Number(prompt("Digite o valor de Y (ou pressione Cancelar para sair):"));

    // Verifica se pelo menos uma coordenada é nula (o usuário pressionou "Cancelar").
    if (x === null || y === null) {
        break;
    }

    if (x === 0 || y === 0) {
        alert("O ponto está em um dos eixos (X ou Y).");
    } else if (x > 0 && y > 0) {
        alert("Q1");
    } else if (x < 0 && y > 0) {
        alert("Q2");
    } else if (x < 0 && y < 0) {
        alert("Q3");
    } else if (x > 0 && y < 0) {
        alert("Q4");
    }
}
