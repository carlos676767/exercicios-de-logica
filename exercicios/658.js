function getCount(str) {
  const alfabeto = Array.from("aeiou");
  return str
    .split("")
    .map((data) => alfabeto.includes(data))
    .filter(Boolean).length;
}
