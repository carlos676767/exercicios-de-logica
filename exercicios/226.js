let opcao = parseInt(prompt(`MENU DE OPÇÕES\n[1] Média Aritmética\n[2] Média Ponderada\n[3] Sair`));

switch (opcao) {
    case 1:
        let nota1 = parseInt(prompt(`Digite a primeira nota`));
        let nota2 = parseInt(prompt(`Digite a segunda nota`));
        let mediaAritmetica = (nota1 + nota2) / 2;
        alert(`A média aritmética é: ${mediaAritmetica}`);
        break;

    case 2:
        let notaPonderada1 = parseInt(prompt(`Digite a primeira nota`));
        let peso1 = parseInt(prompt(`Digite o peso da primeira nota`));

        let notaPonderada2 = parseInt(prompt(`Digite a segunda nota`));
        let peso2 = parseInt(prompt(`Digite o peso da segunda nota`));

        let mediaPonderada = (notaPonderada1 * peso1 + notaPonderada2 * peso2) / (peso1 + peso2);
        alert(`A média ponderada é: ${mediaPonderada}`);
        break;

    case 3:
        alert("Saindo do programa.");
        break;

    default:
        alert("Opção inválida.");
        break;
}
