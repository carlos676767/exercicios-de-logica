function firstNonRepeatingLetter(s) {
  const arr = s.split("");
  const myArr = {};
  arr.forEach((data) => {
    !myArr[data] ? (myArr[data] = 1) : ++myArr[data];
  });
  const newStr = Object.entries(myArr).filter(ar => ar[1] == 1)
  console.log(newStr);
  return newStr.length >= 1 ? newStr[0][0] : "";
}

console.log(firstNonRepeatingLetter('sTreSS'));
