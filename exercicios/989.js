const contarVogais = (palavra) => {
  return palavra
    .toLowerCase()
    .split("")
    .filter((arr) => ["a", "e", "i", "o", "u"].includes(arr)).length;
};
