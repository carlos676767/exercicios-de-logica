let salario = parseInt(prompt("Digite seu salario")) //entrada: pega o salario atual 

//controle

if (salario <= 1000) {  //verifica se salario e menor ou igual a 100, se for mostra o novo salario, o aumento, e a %
    let novosalario = salario +(salario * 20 / 100)
    let aumento = novosalario - salario
    alert(`O salário antigo era de $${salario}. Seu novo salário será de $${novosalario}.\n O aumento foi de $${aumento}, o que equivale a um aumento de 20%.`);
} else if(salario >= 1000 && salario <= 3000){ //verifica se salario fica entre 1000 a 3000 , se for mostra o novo salario, o aumento, e a %
    let novosalario = salario +(salario * 15 / 100)
    let aumento = novosalario - salario
    aumento = aumento.toFixed(2)
    alert(`O salário antigo era de $${salario}. Seu novo salário será de $${novosalario}. \nO aumento foi de $${aumento}, o que equivale a um aumento de 15%.`);
} else if(salario >= 3000 && salario <= 8000){ //verifica se salario fica entre 300 a 8000 , se for mostra o novo salario, o aumento, e a %
    let novosalario = salario +(salario * 10 / 100)
    let aumento = novosalario - salario
    aumento = aumento.toFixed(2)
    alert(`O salário antigo era de $${salario}. Seu novo salário será de $${novosalario}. \nO aumento foi de $${aumento}, o que equivale a um aumento de 10%.`);

} else if(salario >= 8000){ //verifica se salario e maior que ou igual 8000,se for mostra o novo salario, o aumento, e a %
    let novosalario = salario +(salario * 5 / 100)
    let aumento = novosalario - salario
    aumento = aumento.toFixed(2)
    alert(`O salário antigo era de $${salario}. Seu novo salário será de $${novosalario}.\n O aumento foi de $${aumento}, o que equivale a um aumento de 5%.`);
} else{ //se nao a pessoa digitar uma palavra aparece isso.
    alert(`Digite um numero e nao uma palavra.`)
}
