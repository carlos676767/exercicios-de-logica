String.prototype.camelCase = function () {
  return this.trim() === ""
    ? ""
    : this.split(" ")
        .map((data) => data.charAt(0).toUpperCase() + data.slice(1).toLowerCase())
        .join("");
};
