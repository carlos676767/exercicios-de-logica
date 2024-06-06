// Em uma escola a media de um aluno em uma disciplina e calculada da seguinte forma: (primeira
//  nota * 2 + segunda nota * 3) / 5. Fa¸ca um programa para ler a primeira e a segunda nota dos
//  alunos de uma turma de 20 alunos, e calcular e exibir a media de cada aluno.



const calcularNotas = (vetorPrimeirasNotas, segundasNotas) => {
    const valores = [5, 3, 2]
    const percorrerArray = vetorPrimeirasNotas.map((nota1, i) => {
        return (nota1 * valores[2] + segundasNotas[i] * valores[1]) / valores[0]
    })
    return percorrerArray
}


module.exports = calcularNotas
