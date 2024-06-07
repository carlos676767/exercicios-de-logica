// Escreva uma função que retornará a contagem de caracteres alfabéticos distintos,
//  sem distinção entre maiúsculas e minúsculas, e dígitos numéricos que ocorrem mais
//  de uma vez na string de entrada. Pode-se presumir que a string de entrada contém apenas
//   alfabetos (maiúsculas e minúsculas) e dígitos numéricos.
// Exemplo
// "abcde" -> 0 # nenhum caractere se repete mais de uma vez
// "aabbcde" -> 2 # 'a' e 'b'
// "aabBcde" -> 2 # 'a' ocorre duas vezes e 'b' duas vezes (`b` e `B`)
// "indivisibilidade" -> 1 # 'i' ocorre seis vezes
// "Indivisibilidades" -> 2 # 'i' ocorre sete vezes e 's' ocorre duas vezes
// "aA11" -> 2 # 'a' e '1'
// "ABBA" -> 2 # 'A' e 'B' ocorrem duas vezes cada

function duplicateCount(text) {
  const regex = /\s+/g;
  const ignorarLetras = text.toLowerCase().replace(regex, "").split("");
  const contarPlavras = {};
  let testes = {};
  ignorarLetras.forEach((data) => {
    if (!contarPlavras[data]) {
      contarPlavras[data] = 1;
    } else {
      ++contarPlavras[data];
    }
  });
  for (const key in contarPlavras) {
    console.log(contarPlavras);
  }
  delete contarPlavras.u;
  console.log(contarPlavras);
}

duplicateCount("ugyvhgGGGGGGGGGGGGGGGGGGGGG yyyyyyyyyyyyyyyyyyyyyyyy");
