function scramble(str1, str2) {
  const count = {};

  for (let i = 0; i < str1.length; i++) {
    if (!count[str1[i]]) {
      count[str1[i]] = 1;
    } else {
      ++count[str1[i]];
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!count[str2[i]]) {
      return false;
    }

    --count[str2[i]];
  }

  return true;
}

console.log(scramble("rkqodlw", "world"));
