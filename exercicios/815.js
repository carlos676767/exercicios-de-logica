function getAge(inputString) {
  const numero = inputString.match(/\d+/g)[0];
  return Number(numero);
}
