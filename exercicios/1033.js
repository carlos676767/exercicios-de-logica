function sortArray(array) {
  const order = array.filter((char) => char % 2 !== 0).sort((a, b) => a - b);

  let indicex = 0;

  return array.map((char) => (char % 2 !== 0 ? order[indicex++] : char));
}


const test = [3]
const a = `2`
test.includes(a)