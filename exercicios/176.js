let idadesArray = [];

function calcularMedia() {
    let somar = 0;
    for (const idade of idadesArray) {
        somar += idade;
    }
    let media = somar / idadesArray.length;
    return media;
}


for (let i = 0; i < 10; i++) {
    let idade = parseInt(prompt(`Digite sua idade`));
    idadesArray.push(idade);
}

const receberMedia = calcularMedia();
console.log(`A média de idade é ${receberMedia}`);

function contarMaioresDe18() {
    let contador = 0;

    for (const idade of idadesArray) {
        if (idade > 18) {
            ++contador;
        }
    }

    return contador;
}

let quantidadeMaiores = contarMaioresDe18();
console.log(`Exatamente ${quantidadeMaiores} têm mais de 18 anos`);


function idades5() {
    let idade = 0
    for (const i in idadesArray) {
        if (idadesArray[i] > 5) { 
            ++idade
        }
    }
    return idade
}

const idades = idades5()
console.log(`Exatamente ${idades} tem mais de 5 anos`);

function maior() {
    let maior = 0
    for (const key in idadesArray) {
        if (idadesArray[key] > maior) {
           maior = idadesArray[key]
            
        }
    }
    return maior
}

const maiorn = maior()
console.log(`O maior numero e ${maiorn}`);

