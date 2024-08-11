function dezVezes(n = 10) {
  const nome = "carlos";
  let pegar = "";
  for (let i = nome.length - 1; i >= 0; i--) {
    pegar += nome[i];
  }
  console.log(pegar);
}
// dezVezes();

function invertStr(str) {
  if (str.length == 1) {
    return str
  }
 return str[str.length - 1] + invertStr(str.slice(0, str.length - 1))
}

console.log(invertStr('carlos'));