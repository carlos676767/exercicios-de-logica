function disemvowel(str) {
  return str
    .split("")
    .filter((data) => !["a", "e", "i", "o", "u"].includes(data.toLowerCase()))
    .join("");
}
