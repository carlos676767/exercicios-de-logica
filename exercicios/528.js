function incrementString(strng) {
  const regex = /\d/;
  if (regex.test(strng)) {
    const numero = strng.match(/\d+$/)[0];
    const converterNumero = Number(numero) + 1;
    const retornarStrNova = strng.replace(numero, converterNumero.toString());
    return retornarStrNova;
  } else {
    const strComNumero = strng + "1";
    return strComNumero;
  }
}

console.log(incrementString("foobar000"));
