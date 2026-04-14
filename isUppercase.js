String.prototype.isUpperCase = function () {
  return this.split(``).every((c) => c === c.toUpperCase());
};

console.log("HELLO".isUpperCase());
console.log("Hello".isUpperCase());
