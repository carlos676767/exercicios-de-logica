function toCamelCase(let) {
  const tirar = let.replace(/[-_]/g, "");
  return tirar.replace(/(?:^|_)([a-z])/g, function (_, letter) {
    return letter.toUpperCase();
  });
}

const str = "the-stealth-warrior";
console.log(toCamelCase(str));
