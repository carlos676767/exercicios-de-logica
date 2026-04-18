function encode(str, n) {
  const key = String(n).split("").map(Number);

  return str.split("").map((c, i) => {
    const letterValue = c.charCodeAt(0) - 96;
    const keyValue = key[i % key.length];
    return letterValue + keyValue;
  });
}
console.log(encode(`scout`));
