let salarioatual = parseInt(prompt(`Digite seu salario`));
let genero = prompt(`Digite seu genero [H] ou [F]`).toLowerCase();
let anos = parseInt(prompt(`Quantos anos de empresa?`));

function mulheres() {
    if (genero === 'f') {
        if (anos <= 15) {
            let novosalario = salarioatual * 1.05;
            console.log(`Como você é mulher e tem ${anos} anos de empresa, seu salário sairá de ${salarioatual} para ${novosalario.toFixed(2)}`);
        } else if (anos > 15 && anos <= 20) {
            let novosalario = salarioatual * 1.12;
            console.log(`Como você é mulher e tem ${anos} anos de empresa, seu salário sairá de ${salarioatual} para ${novosalario.toFixed(2)}`);
        } else if (anos > 20) {
            let novosalario = salarioatual * 1.23;
            console.log(`Como você é mulher e tem ${anos} anos de empresa, seu salário sairá de ${salarioatual} para ${novosalario.toFixed(2)}`);
        }
    }
}


function homens() {
    if (genero === 'h') {
        if (anos < 20) {
            let novosalario = salarioatual * 1.03;
            console.log(`Como você é homem e tem menos de 20 anos de empresa, seu salário antigo era ${salarioatual}, agora será de ${novosalario.toFixed(2)}`);
        } else if (anos >= 20 && anos <= 30) {
            let novosalario = salarioatual * 1.13;
            console.log(`Como você é homem e tem entre 20 e 30 anos de empresa, seu salário antigo era ${salarioatual}, agora será de ${novosalario.toFixed(2)}`);
        } else if (anos > 30) {
            let novosalario = salarioatual * 1.25;
            console.log(`Como você é homem e tem mais de 30 anos de empresa, seu salário antigo era ${salarioatual}, agora será de ${novosalario.toFixed(2)}`);
        }
    }
}


mulheres();
homens();


