function anoDeNascimento(ano) {
    let obterAnoAtual = new Date().getFullYear();
    let subtrair = obterAnoAtual - ano;
    let meses = subtrair * 12; 
    let dias = meses * 30
    return `Sua idade e ${subtrair}, seu total de meses de vida sao de ${meses} e um total de dias de ${dias.toFixed(2)}`;
}

console.log(anoDeNascimento(2004));