/*Contagem de Vogais e Consoantes: Escreva um programa que recebe uma string 
como entrada e conta o número de vogais e consoantes na string*/


const contarConsolantesEvogais = () => {
    const nome: string = `carlos`
    const converterEmArray = nome.split(``)
    const vogais: string[] = [`a`, `e`, `i`, `o`, `u`]
    let contarVogais: number = 0
    let contarConsolantes: number = 0
    for (const i in converterEmArray) {
        if (vogais.includes(converterEmArray[i])) {
            ++contarVogais
        } else {
            ++contarConsolantes
        }
    }
    console.log(`o nome ${nome} tem ${contarVogais} vogais`)
    console.log(`o nome ${nome} tem ${contarConsolantes} consoantes`)
}
contarConsolantesEvogais()