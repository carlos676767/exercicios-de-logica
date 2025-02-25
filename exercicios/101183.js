String.prototype.camelCase = function () {
  return this.split(` `)
    .map((char) => {
      return char[0].toUpperCase().concat(char.slice(1));
    })
    .join(``);
};

console.log("hello case".camelCase());