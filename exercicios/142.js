let homens = 0
let femininos = 0
let mediamulheres = 0
let mediahomens = 0
let somarmediahomens = 0
let somarmulheres = 0
let vintemulher = 0 

for(let i = 0; i <= 5; ++i){
    let idade = parseInt(prompt("Digite sua idade"))
    let sexos = prompt(`Digite [m] para homem, digite [f] para mulher`)
    if (sexos === `m`) {
        ++homens
        mediahomens += idade
        somarmediahomens = mediahomens / idade
    } 
    if (sexos === `f` && idade >= 20) {
        ++femininos
        mediamulheres+= idade
        somarmulheres = mediamulheres / idade
        ++vintemulher
    }
}

console.log(`O total de homens cadastrados sao de ${homens}`);
console.log(`O total de mulheres cadastradas sao de ${femininos}`);
console.log(`A media da idade entre os homens e de ${somarmediahomens}`);
console.log(`A media de idade entre as mulheres e de ${somarmulheres}`);
console.log(`Mulheres ${vintemulher} tem mais de 20 anos`);