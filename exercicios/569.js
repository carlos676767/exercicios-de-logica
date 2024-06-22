function opposite(number) {
  if (number < 0) {
    return Math.abs(number);
  } else {
    return number * -1;
  }
}

console.log(opposite(3));
