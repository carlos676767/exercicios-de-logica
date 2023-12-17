let array = []
for (let i = 0; i < 10; i++) {
    let nomes = prompt(`Qual o seu nome?`)

    if (nomes === `carlos` ) {
        continue
    }
    array.push(nomes)
    console.log(array);
}

