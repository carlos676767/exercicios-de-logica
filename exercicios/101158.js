function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const list = [age1, age2, age3, age4, age5, age6, age7, age8];

  const num = list.map((char) => char * char).reduce((a, b) => a + b, 0);
  return Math.floor(Math.sqrt(num) / 2);
}


console.log(predictAge(10, 20, 30, 40, 50, 60, 70, 80)); // Output: 35