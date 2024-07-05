function countUpperCase(str) {
  const palavra = Array.from(str).map((data) => data.charCodeAt())
  .filter((data) => data >= 65 && data <= 90).length;
  return palavra;
}
