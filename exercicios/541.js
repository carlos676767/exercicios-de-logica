//funcao geneyor js

function* contador() {
  let contar = 0;
  while (contar < 10) {
    ++contar;
    yield contar;
  }
}

const testes = contador();
console.log(testes.next());
console.log(testes.next());
console.log(testes.next());
console.log(testes.next());
