function digitMultiplication(expr) {
  const removeCaracteres = expr.replace(/[+-]/g, "");
  const convreterInNumber = [...removeCaracteres].map((data) => Number(data));

  return convreterInNumber.reduce((acc, ac) => acc * ac, 1);
};