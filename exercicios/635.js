function cifrar(str, decifre) {
  const alfabeto = Array.from("abcdefghijklmnopqrstuvwxyz"); //ele avanca cada letra h + 2 = k
  str.toLowerCase().trim()
  const newStr = str.split("");
  const newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    let temp = alfabeto.indexOf(newStr[i]) + decifre % 26;
    newArr.push(alfabeto.at(temp));
  }
  return newArr.join("");
}

console.log(cifrar("Ola mundo", 3)); //fduod
