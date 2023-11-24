let armazenarnome = []
let armazenarsalario = []
let armazenarsexo = []

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite seu nome`)
    let sexo = prompt(`Digite [M] ou [F]`)
    let salario = prompt(`Digite seu salario`)
    armazenarnome.push(nome)
    armazenarsalario.push(salario)
    armazenarsexo.push(sexo)
}

let contar = 0;

for (let i = 0; i < 5; i++) {
    if (armazenarsexo[i] === 'f' && armazenarsalario[i] > 5000) {
        contar++;
    }
}
console.log(`Número de funcionárias mulheres que ganham mais de R$5 mil: ${contar}`);
