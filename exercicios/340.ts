
const encontrarNumeros = () => {
    const list: number[] = [10, 40, 7, 5, 8, 25, 4, 20]
    let comparador: number = list[0]
    for (let i = 0; i < list.length; ++i) {
        if (comparador > list[i]) {
            comparador = list[i]
        }
    }
    console.log(`O menor numero e ${comparador}`)
}

encontrarNumeros()