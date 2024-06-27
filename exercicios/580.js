function palavraComErro(str1, str2) {
  if (str1 == str2) return true;
  const arrStr1 = str1.split("");
  const arrStr2 = str2.split("");
  let contador = 0;
  for (let i = 0; i < arrStr2.length; ++i)
    if (arrStr2[i] != arrStr1[i]) {
      ++contador;
    }
  if (contador > 1) return true;
  const comprimentoStr1 = str1.length;
  if (comprimentoStr1 > 1) return false;
}

console.log(palavraComErro("ghgf", "joa"));
