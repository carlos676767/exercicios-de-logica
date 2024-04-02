
const frase: string = "O rato roeu a roupa do rei de Roma".replace(/\s/g, '');
const contador: object = {}
const array = Array.from(frase)
for (let i = 0; i < array.length; ++i) {
    if (!contador[array[i]]) {
        contador[array[i]] = 1
    } else {
        ++contador[array[i]]
    }
}

console.log(contador)