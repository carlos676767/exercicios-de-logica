function sumAsciiCodes(str) {
  const palavra = Array.from(str);
  let somar = 0;
  palavra.forEach((data) => {
    const ascki = data.charCodeAt();
    somar += ascki;
  });
  return somar;
}

console.log(sumAsciiCodes("Hello"));
