function abbrevName(name) {
  let abreViacao = [];
  let str = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      abreViacao.push(str);
      str = "";
    } else {
      str += name[i];
    }
  }
  abreViacao.push(str);
  let value = abreViacao[0][0];
  for (let i = 1; i < abreViacao.length; i++) {
    value += "." + abreViacao[i].charAt(0);
  }
  return value.toUpperCase();
}
