function getScore(n) {
  let currentLevel = 1;
  let totalScore = 0;
  let scoreIncrement = 50;

  if (n == 1) return 50;

  while (currentLevel < n) {
    ++currentLevel;
    scoreIncrement += 50;
    totalScore += scoreIncrement;
  }

  return totalScore + 50;
}

console.log(getScore(3));
//1 =50
//2 = 150 (50 + 100)[]
//3 =300 (150 + 150)[]
//4 = 500 (300 + 200)[]
//5 = 750 (500 + 250)
