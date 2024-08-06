const sulution = (s) => {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    let string = s[i].charCodeAt(0);
    if (string >= 65 && string <= 90) {
      newStr += " " + String.fromCharCode(string)
      continue
    }
    newStr+= String.fromCharCode(string)
  }
  return newStr
};

console.log(sulution("camelCasing"))
