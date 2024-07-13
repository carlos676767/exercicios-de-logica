function betterThanAverage(classPoints, yourPoints) {
  const somer = classPoints.reduce((a, c) => a + c);
  const media = somer / classPoints.length;
  return yourPoints > media ? true : false;
}
