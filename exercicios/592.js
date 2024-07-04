function countUpperCase(str) {
  const palavra = Array.from(str).map((data) => data.charCodeAt());
  const filtrar = palavra.filter((data) => data >= 65 && data <= 90).length;
  return filtrar;
}
