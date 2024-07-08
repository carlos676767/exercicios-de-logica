const ordenarPalavra= (palavra) => {
  return palavra.split(" ").sort((a,b) => a.length - b.length).join(" ")
}

console.log(ordenarPalavra("banana apple maça"))