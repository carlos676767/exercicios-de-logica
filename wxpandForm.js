function expandedForm(num) {
  return String(num)
    .split(``)
    .map((digit, index, arr) => {
      const zeros = arr.length - index - 1;
      const dig = digit !== "0" ? digit + "0".repeat(zeros) : null;
      return dig;
    })
    .filter(Boolean)
    .join(` + `);
}

console.log(expandedForm(5));
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
console.log(expandedForm(15));
