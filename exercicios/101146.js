function sortArray(array) {
  const sortVector = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  return array.map((char) => (char % 2 !== 0 ? sortVector.shift() : char));
}
