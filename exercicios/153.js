function estatiscas() {
    let contarhomens = 0
    let contarmulheres = 0
    let armazenarvalorehomens = []
    let armazenarmulheres = []
    let somarhomens = 0
    let mediahomens = 0
    let somarmulheres = 0
    let mediadasmulheres = 0 
    let contarmulheres20 = 0
    let homensmaisde20 = 0
    let paresmulheres = []
    let pareshomens = []
    let maiornumeroparhomens = 0
   
    for (let i = 1; i <= 5; i++) {
        let sexo = prompt(`Digite seu sexo [f] ou [h]`)
        let idade = parseInt(prompt(`Digite sua idade`))

        if (idade < 0 || isNaN(idade)) {
            alert(`Digite uma idade valida`)
        }

        if (sexo === `h`) { 
            ++contarhomens
            armazenarvalorehomens.push(idade)
        }

        if (sexo === `f`) {
            ++contarmulheres
            armazenarmulheres.push(idade)
        }
    }
    for(let i = 0; i < armazenarvalorehomens.length; ++i ){
        somarhomens+= armazenarvalorehomens[i]
        mediahomens = somarhomens / contarhomens
        if (armazenarvalorehomens[i] >= 20) {
            ++homensmaisde20
        }

        if (armazenarvalorehomens[i] %2 === 0) {
            pareshomens.push(armazenarvalorehomens[i])
        }
    }

    for (let index = 0; index < pareshomens.length; index++) {
        if (pareshomens[index] > maiornumeroparhomens) {
            maiornumeroparhomens = pareshomens[index]
        }
    }

    for (let j = 0; j < armazenarmulheres.length; j++) {
        somarmulheres+= armazenarmulheres[j]
        mediadasmulheres = somarmulheres / contarmulheres
        if (armazenarmulheres[j] >= 20) {
           ++contarmulheres20
        }

        if (armazenarmulheres[j] %2 === 0) {
          paresmulheres.push(armazenarmulheres[j])  
        }
       
    }
    return {
        numerodehomens: contarhomens, 
        contarmulheres: contarmulheres,
        mediashomens: mediahomens, 
        mediamulheres: mediadasmulheres, 
        contarmulheresidade20: contarmulheres20,
        contaridadehomens20: homensmaisde20,
        numerosparesidademulheres: paresmulheres, 
        numerosparesdehomens: pareshomens,
        maiorpareshomens: maiornumeroparhomens
    }
}

let resultado = estatiscas()
console.log(`O total de homens e ${resultado.numerodehomens}`);
console.log(`O total de mulheres e de ${resultado.contarmulheres}`);
console.log(`A media dos homens e de ${resultado.mediashomens}`);
console.log(`A media das mulheres e de ${resultado.mediamulheres}`);
console.log(`O total de mulheres que tem 20 anos e ${resultado.contarmulheresidade20}`);
console.log(`Exatamente homens tem mais de 20 anos ${resultado.contaridadehomens20}`);
console.log(`Os numeros pares nas idades das mulheres sao ${resultado.numerosparesidademulheres}`);
console.log(`As idades pares dos homens sao o ${resultado.numerosparesdehomens}`);
console.log(`O maior numero par nos homens e ${resultado.maiorpareshomens}`);