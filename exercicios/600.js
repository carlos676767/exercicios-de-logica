const maiorPalavra = (palavras) => {
    return palavras.reduce((acc, c) => {
        return acc.length > c.length ? acc : c
    });
};