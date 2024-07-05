const maiorPalavra = (palavras) => {
    let Maior = '';
    for (let i = 0; i < palavras.length; i++){
        if (palavras[i].length > Maior.length){
            Maior = palavras[i];
        }
    }
    return Maior;
}

const ArrayDePalavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorPalavra(ArrayDePalavras));