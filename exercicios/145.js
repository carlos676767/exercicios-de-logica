let salariomulheres = 0
let salariohomens = 0

while(true){
    let sexo = prompt(`Digite [h] para homem, digite [f] para mulher`)
    let salario = parseInt(prompt(`Digite o salario`))
    let parar = prompt(`quer parar? [s], [n]`)
    if (parar === `s`) {
        console.log(`Programa encerrado`);
        console.log(`O salario pago as mulheres foi de ${salariomulheres}`);
        console.log(`O salario pago aos homens foi de ${salariohomens}`);
        break
    }

    if (sexo === `h`) {
        salariohomens+= salario
    }

    if (sexo === `f`) {
         
        salariomulheres+= salario
    }
}
