function persistence(num) {
  let count = 0;
  while (num >= 10) {
    const value = num.toString().split("").map(Number);
    num = value.reduce((acc, ac) => acc * ac);
    count++;
  }

  return count;
}

console.log(persistence(4));
