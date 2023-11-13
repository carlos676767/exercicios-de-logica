function estaticas() {
    let maior = 0
    let homens = 0
    let menor = 1000
    let menoridademulher = 0
    let mediahomens = 0
    let somarhomens = 0

    while (true) {
        let sexo = (prompt(`Digite [m] ou [h]`))
        let idade = parseInt(prompt(`Digite sua idade`))
        let continuar = prompt(`quer continuar? [s] caso [n]`)

        if(idade > maior){
            maior = idade;
        }


        if (sexo === `h`) {
            ++homens
            somarhomens+= idade
            mediahomens = somarhomens / homens
        }

       

        if (sexo === `m`) {
            menoridademulher = idade
        }

        if (menoridademulher < menor) {
            menor = menoridademulher
        }
       

        if (continuar === `n`) {
            console.log(`Programa encerrado`);
            break
        }
    } return {
        idademaior: maior,
        numeroshomens: homens,
        menoridadedasmulheres: menor,
        meeidaidadehomens: mediahomens 

    }
}

let resultado = estaticas()
console.log(`A idade maior e ${resultado.idademaior}`);
console.log(`O numero total de homens e ${resultado.numeroshomens}`);
console.log(`A menor idade das mulheres ${resultado.menoridadedasmulheres}`);
console.log(`A media de idade entre os homens e de ${resultado.meeidaidadehomens}`);