function getAverage(marks) {
  const result = marks.reduce((a, b) => a + b) / marks.length;
  return Math.floor(result);
}

console.log(getAverage([4,12,17,11,10,4,11]));
