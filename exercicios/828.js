function isPalindrome(x) {
  const string = x.toLowerCase();
  let receberStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    receberStr += string[i];
  }
  return receberStr === string;
}

module.exports = isPalindrome;
