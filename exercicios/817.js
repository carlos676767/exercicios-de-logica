function XO(str) {
  const arr = str.toLowerCase().split("");
  let countO = 0;
  let countS = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "o") {
      ++countO;
    } else if (arr[i] == "x") {
      ++countS;
    }
  }
  return countO === countS ? true : false;
}

console.log(XO("ooxx"));
