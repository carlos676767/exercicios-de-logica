function encrypt(text) {
  const pares = text.split("").filter((data, i) => i % 2 === 0);
  const impares = text.split("").filter((data, i) => i % 2 !== 0);
  return [...pares.sort(), ...impares.sort()].join("");
}
