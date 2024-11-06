const ContarQuantasVezesumNúmeroApareceemumaLista =(lista, n) => {
  return lista.filter(data => data === n).length
}

console.log(ContarQuantasVezesumNúmeroApareceemumaLista([1, 2, 3, 4, 1, 2, 1], 1))