let armazenar = []
let somar = 0
let contador = 0
while (true) {
    let idade = parseInt(prompt(`Digite as idade dos alunos`))
    armazenar.push(idade)
    let parar = parseInt(prompt(`Digite [111] para parar`))
    if (parar === 111) {
        console.log(`Programa encerrado`)
        break
    }else{
        ++contador
    }
}
for (let i = 0; i < armazenar.length; i++) {
    somar+= armazenar[i]
}

let media = somar/armazenar.length
console.log(`A media e ${media}`);
console.log(`O total de alunos e ${contador}`);