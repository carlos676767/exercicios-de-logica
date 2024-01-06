function horasTrabalhadas() {
    const horasDeTrabalho = parseInt(prompt(`Digite o total de horas de trabalho`));
    const salarioPorHora = parseInt(prompt(`Digite o salário por hora`));

    if (horasDeTrabalho >= 40) {
        const horasExtras = horasDeTrabalho - 40; 
        const salarioHoras = salarioPorHora * horasDeTrabalho; 
        const salarioExtras = salarioPorHora * 1.5 * horasExtras; 
        const salarioTotal = salarioHoras + salarioExtras;
        alert(`O seu salário total com as horas extras será de R$${salarioTotal.toFixed(2)}`);
    } else {
        const salarioHoras = salarioPorHora * horasDeTrabalho;
        alert(`Como você não teve horas extras, você receberá R$${salarioHoras.toFixed(2)}`);
    }
}

horasTrabalhadas();
