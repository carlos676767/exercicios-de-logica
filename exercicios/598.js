
const maiorPalavra = (palavras) => {
  return palavras.reduce((acc, c) => {
    if (c.length > acc.length) return c;
    return acc;
  });
};
  