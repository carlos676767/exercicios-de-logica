function product(string) {
  const inter = Array.from(string).filter((data) => data == "?").length;
  const exclamacao = Array.from(string).filter((data) => data === "!").length;
  return inter * exclamacao;
}
