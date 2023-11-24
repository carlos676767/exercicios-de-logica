let totalSalariosHomens = 0;
let totalSalariosMulheres = 0;

while (true) {
    let salario = parseFloat(prompt('Digite o salário do funcionário:'));
    let sexo = prompt('Digite o sexo do funcionário (m/f):').toLowerCase();

    if (sexo === 'm') {
        totalSalariosHomens += salario;
    } else if (sexo === 'f') {
        totalSalariosMulheres += salario;
    } else {
        alert('Opção de sexo inválida. Use "m" para masculino ou "f" para feminino.');
        continue;  
    }

    let continuar = prompt('Deseja cadastrar mais um funcionário? (s/n)').toLowerCase();
    if (continuar == 's') {
        break;  
    }
}

console.log(`Total de salários pagos aos homens: ${totalSalariosHomens}`);
console.log(`Total de salários pagos às mulheres: ${totalSalariosMulheres}`);



