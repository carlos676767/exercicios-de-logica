//refaturando codigo
const vetorValores: number[] = [10, -4, 20, -5, 2, -21];
const vetorNovo = vetorValores.map((numero) => (numero < 0 ? 0 : numero));
console.log(vetorNovo);


