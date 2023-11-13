function mediadosalunos() {
    let n1 = parseInt(prompt(`Digite um numero`))
    let n2 = parseInt(prompt(`Digite outro numero`))
    let media = (n1+n2) / 2
    return media
}

function situcao(media) {
    if (media >= 7) {
        console.log(`Aprovado`);
    }else if(media >= 5 && media <= 4){
        console.log(`Recuperacao`);
    }else{
        console.log(`Aluno reprovado`);
    }
}

let resultado = mediadosalunos()
situcao(resultado)
console.log(resultado);