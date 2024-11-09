function isPalindrome(x) {
  let palavra = "";

  for (let i = x.length - 1; i >= 0; i--) {
    palavra += x[i];
  }

  return palavra.toLocaleLowerCase() === x.toLocaleLowerCase();
}
