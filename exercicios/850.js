function camelCase(str) {
  return str
    .split(" ")
    .map((data) => data[0].toUpperCase() + data.slice(1))
    .join("");
}

console.log(camelCase("hello case"));
