String.prototype.camelCase = function () {
  if (this) {
    return this.split(` `)
      .filter((str) => str != ``)
      .map((char) => char[0].toUpperCase() + char.slice(1))
      .join(``);
  }
};
