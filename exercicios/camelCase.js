String.prototype.camelCase = () => {
  return this.split(` `)
    .map((char) => {
      return char[0].toUpperCase() + char.slice(1);
    })
    .join(``);
};
