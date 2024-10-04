function isPangram(string) {
  const letras = string.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return Array.from(new Set(letras)).length >= 26;
}
