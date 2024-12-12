function reverse(string) {
  let i = string.length - 1;
  let getString = ``;

  do {
    getString += string[i];
    --i;
  } while (i >= 0);

  return getString;
}
