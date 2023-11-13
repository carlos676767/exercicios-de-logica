function mediadoaluno() {
    let nota1 = parseInt(prompt(`Digite uma nota`))
    let nota2 = parseInt(prompt(`Digite uma outra nota`))
    let media = nota1 + nota2/ 2

    return media
}

let resultado = mediadoaluno()

console.log(`A media e ${resultado}`);


situacao(resultado)

function situacao(resultado) {
    if (resultado >= 7) {
        console.log(`Aluno aprovado`)
    } else if(resultado >= 5 && resultado <= 4){
        console.log(`Recuperacao`)
    } else{
        console.log(`Aluno reprovado`)
    }
}

