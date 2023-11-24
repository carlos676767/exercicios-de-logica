let nome = prompt(`Digite seu nome`)
let salario = parseInt(prompt(`Digite seu salario`))
let tempoempresa = parseInt(prompt(`Digite seu tempo de empresa`))

if (tempoempresa === 3) {
    let novosalrio = salario * 1.03
    console.log(`${nome} como voce tem 3 anos de empresa seu salario sera de ${novosalrio}`);
} else if (tempoempresa >= 3 && tempoempresa <= 10) {
    let novosalrio = salario * 0.125
    console.log(`${nome} como voce tem entre 3 a 10  empresa seu salario sera de ${novosalrio}`);
} else if (tempoempresa > 10) {
    let novosalrio = salario * 1.20
    console.log(`${nome} como voce tem mais de 10 anos de empresa seu salario sera de ${novosalrio}`);
}