function isVow(a) {
  const vogais = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };

  return a.map((num) => {
    if (vogais[num]) {
      return vogais[num];
    }
    return num;
  });
}



