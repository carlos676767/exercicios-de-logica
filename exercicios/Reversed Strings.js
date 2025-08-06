function solution(str) {
  let i = str.length;
  let value = ``;

  while (i > 0) {
    --i;
    value += str[i];
  }

  return value;
}