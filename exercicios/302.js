function notas(nota1, nota2, nota3, letra) {
    if (letra === "a") {
        let media = nota1 + nota2 + nota3/3
        return `media ${media}`
    }else if (letra === "p") {
        let multiplicarValores = (nota1 * 5) + (nota2 * 3) + (nota3 * 2)
        let somarPesos = 5+3+2
        let mediaPonderada = multiplicarValores / somarPesos
        return `media ponderada ${mediaPonderada}`
    } else if (letra === "h") {
      let h = 3 / (1/nota1 + 1/nota2 + 1/nota3);
      return `media harminica ${h}`
    }else{
        return `Digite uma letra [A], [P], [H]`
    }
}

console.log(notas(6,5,7, "h"));