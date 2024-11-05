function hasUniqueChars(str) {
  const valorUNBICO = new Set(str);
  return Array.from(valorUNBICO).join("") === str;
}
