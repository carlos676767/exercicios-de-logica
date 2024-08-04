function descendingOrder(n) {
  const convert = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(convert);
}
