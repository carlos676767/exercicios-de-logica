function duplicateCount(text) {
  const texto = text.toLowerCase().split("");
  const count = {};
  texto.forEach((data) => {
    if (!count[data]) {
      count[data] = 1;
    } else {
      ++count[data];
    }
  });

  return Object.values(count).filter((data) => data > 1).length;
};