function XO(str) {
  const mystr = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < mystr.length; i++) {
    if (mystr[i] === "o") {
      ++countO;
    } else if (mystr[i] === "x") {
      ++countX;
    }
  }
  return countO === countX;
}

module.exports = XO
