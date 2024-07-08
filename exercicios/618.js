const converterEmMaiscula = (palavra) => {
  const splitPalavra = palavra.split(" ")
  return splitPalavra.map(data => data.charAt().toUpperCase() + data.slice(1)).join(" ")
}

console.log(converterEmMaiscula("ola me chamo carlos"))
console.log(converterEmMaiscula("o ana juliaaa"))