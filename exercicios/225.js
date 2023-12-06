let vetor = []

//inicia uma funcao pedindo 15 idades 
function idadesDepessoas(array) {
    for (let i = 0; i <= 15;++i) {
        let digitarIdades = parseInt(prompt(`Digite uma idade`))
        array.push(digitarIdades)
    }
    return array
}
//chama a funcao
idadesDepessoas(vetor)

//verifica a faixa etaria de idade
function faixaEtariaIdade() {

    //cria uma variavel que pega idades ate 15
    let contarIdadeAteQuinze = 0

    //cria uma variavel que conta de 15 a 30
    let contarIdadeAte30 = 0

    //cria uma variavel que conta as idades ate 45
    let contarIdadeEntre31E45 = 0 

    //cria uma variavel que conta ate 60 anos
    let contarIdadeEntre46E60 = 0 

    //inicia uma variavel que conta idade das pessoas acima de 61 anos
    let contariDadeAcimaDe61Anos = 0

    //cria um loop com as idades 
    for (let i = 0; i < vetor.length; i++) {
        //verifica se idade e menor ou igual a 15 e conta
        if (vetor[i] <= 15) {
            ++contarIdadeAteQuinze
        //verifica se idade esta entre 15 e 30 e conta    
        } else if (vetor[i] >= 15 && vetor[i] <= 30) {
            ++contarIdadeAte30
        //verifica se idade esta entre 31 e 45 e conta
        } else if (vetor[i] >= 31 && vetor[i] <= 45) {
            ++contarIdadeEntre31E45
        //verifica se idade esta entre 46 e 60 e conta
        } else if (vetor[i] >= 46 && vetor[i] <= 60) {
            ++contarIdadeEntre46E60
        //conta idades acima de 61 anos
        } else{
            ++contariDadeAcimaDe61Anos
        }
    }
    return {
        "numero de pessoas com ate 15 anos":contarIdadeAteQuinze,
        "numero de pessoas com ate 30 anos":contarIdadeAte30,
        "numero de pessoas entre 31 e 45 de idade": contarIdadeEntre31E45,
        "numero de pessoas entre 46 e 60 anos": contarIdadeEntre46E60, 
        "numero de pessoas acima de 61 anos":contariDadeAcimaDe61Anos 
    }
}
//mostra uma tabela com o numero de idades 
console.table(faixaEtariaIdade())
//cria uma funcao que calcula a % das idades
function calcularPorcentagemDeidades() {
    const calcularPorcentagemIdadesAteQuinze = (faixaEtariaIdade()["numero de pessoas com ate 15 anos"]/15) * 100
    const calcularDepessoasAte30Anos = (faixaEtariaIdade()["numero de pessoas com ate 30 anos"]/15) * 100
    const calcularPorcentagemEntre31e45anos = (faixaEtariaIdade()["numero de pessoas entre 31 e 45 de idade"]/ 15) * 100
    const calcularPorcentagemEntre46e60Anos = (faixaEtariaIdade()["numero de pessoas entre 46 e 60 anos"]/ 15) * 100
    const calcularPorcentagemAcimade61 = (faixaEtariaIdade()["numero de pessoas acima de 61 anos"]/ 15) * 100

    return {
        "% de pessoas ate 15 anos": calcularPorcentagemIdadesAteQuinze,
        "% de pessoas ate 30 anos": calcularDepessoasAte30Anos,
        "% de pessoas entre 31 e 45 anos":calcularPorcentagemEntre31e45anos,
        "% de pessoas entre 46 e 60 anos": calcularPorcentagemEntre46e60Anos,
        "% de pessoas acima de 61 anos": calcularPorcentagemAcimade61
    }
}
//mostra as idades com a %
console.table(calcularPorcentagemDeidades())
