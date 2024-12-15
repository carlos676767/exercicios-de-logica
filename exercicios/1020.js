function isPangram(string) {
  const strInLower = [...string.toLowerCase()].filter(char => /[a-z]/.test(char))
  return new Set(strInLower).size == 26
}

console.log(isPangram(`silva rodrigueSs`));
