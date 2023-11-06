//entrada
let quantoscaos = parseInt(prompt(`quantos casos de testes serao digitados?`))

let rato = 0
let coelho = 0
let sapo = 0

for(let i = 0; i < quantoscaos;++i){
    let quantidadecobais = parseInt(prompt(`Digite a quantidade de cobais`))
    let tipo = prompt(`Digite o tipo de cobaia`)

    switch(tipo){
        case `r`: {
            quantidadecobais += rato
            ++rato
            break
        }
        case `c`:{
            quantidadecobais += coelho
            ++coelho
            break
        }
        case `s`: {
            quantidadecobais += sapo
            ++sapo
            break
        }
        default: {
            console.log(`Digite um valor valido.`)
            break
        }
    }
}

let resultado = coelho+sapo+rato
let percentualRatos = (rato / resultado) * 100;
let percentualcoelho = (coelho / resultado) * 100;
let percentualsapos = (sapo / resultado) * 100;
console.log('Relatório final');
console.log(`Total de ${resultado} cobaias`);
console.log(`Quantidade de coelhos: ${coelho}`);
console.log(`Quantidade de sapos: ${sapo}`);
console.log(`Quantidade de ratos: ${rato}`)
console.log(`Percentual de ratos ${percentualRatos}`)
console.log(`Percentual de coelhos ${percentualcoelho}`)
console.log(`Percentual de sapos ${percentualsapos}`)