function findShort(s) {
  const retornarLength = s.split(" ").map((data) => data.length);
  const retornarTamanhoPalavra = Math.min(...retornarLength);
  return retornarTamanhoPalavra;
}
