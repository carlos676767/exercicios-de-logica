
const retornarNovaStringCarmel = () => {
    const receberCamel: string[] = [];
    const receberCasing: string[] = [];
    const nome: string[] = 'camelCasing'.split('').concat(' ')
    for (let j = 0; j <= 4; j++) {
        if (["c", "a", "m", "e", "l"].includes(nome[j])) {
            receberCamel.push(nome[j])
        }
    }
    for (let j = 5; j <= 10; j++) {
        receberCasing.push(nome[j])
    }
    const retornarNovaString = receberCamel.join('').concat(' ', receberCasing.join(''))
    console.log(retornarNovaString)
}

retornarNovaStringCarmel()