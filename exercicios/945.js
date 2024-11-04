function descendingOrder(n) {
  const values = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  return Number(values);
}
