function high(sentence) {
  const alphabet = Array.from(Array(26).keys()).map((index) =>
    String.fromCharCode(index + 97)
  );

  const words = sentence.split(" ").map((word) => word.split(""));

  const wordScores = words.map((letters) =>
    letters
      .map((letter) => alphabet.indexOf(letter) + 1)
      .reduce((acc, score) => acc + score)
  );

  const highestScoringWord = wordScores.indexOf(Math.max(...wordScores));
  const acess = words[highestScoringWord].join("");
  return acess;
}

console.log(high("man i need a taxi up to ubud"));

module.exports = high;
