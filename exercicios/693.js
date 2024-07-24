

function disemvowel(str) {
    const gerarVogais = [97, 101, 105, 111, 117, 65, 69, 73, 79, 85];
    const vogais = [].sort()
    const palavra = str.split("")
    let NewPalavra = ""
    let i = 0
    while (i < gerarVogais.length) {
        vogais.push(String.fromCharCode(gerarVogais[i]))
        ++i
    }

    for (let i = 0; i < palavra.length; i++) {
         if (vogais.includes(palavra[i])) {
            palavra.splice(i, 1)
            --i
         }
    }
    
    for (let i = 0; i < palavra.length; i++) {
        NewPalavra += palavra[i]
    }
    return NewPalavra
}

console.log(disemvowel("OfuuH E"));