class AgruparValores {
  constructor(array, objeto) {
    this.array = array;
    this.objeto = objeto;
  }

  agruparArray() {
    
   return Map.groupBy(this.array, (arr) =>
    arr < 0 ? "negativo" : "positivo"
  )
  }

   agruparObjetos() {
    return Object.groupBy(this.objeto, (obejct) => obejct)
  }
}

const valoresAgrupar = new AgruparValores(
  [1, 9, 8, 6, 8, -1, 8, -88, 2],
  [1, 9, 8, 6, 8, -1, 8, -88, 2],
);

console.log(valoresAgrupar.agruparArray());

console.log(valoresAgrupar.agruparObjetos());

