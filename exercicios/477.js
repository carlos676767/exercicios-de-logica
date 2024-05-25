const min = (list) => {
    let menor = 0;
    for (let j = 0; j < list.length; j++) {
        if (list[j] < menor) {
            menor = list[j]
        }
    }
    return menor
}

console.log(min([10, 52, 9, 45, 0, 0]));

const max = (list) => {
    let maior = list[0];
    for (let j = 0; j < list.length; j++) {
        if (list[j] > maior) {
            maior = list[j]
        }
    }
    return maior
}
console.log(max([10, 52, 9, 45, 0, 0]));