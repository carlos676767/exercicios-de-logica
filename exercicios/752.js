function getCount(str) {
  const alfabeto = ["a", "e", "i", "o", "u"];
  return str.split("").filter((data) => alfabeto.includes(data)).length;
}
console.log(getCount("carlos"));
