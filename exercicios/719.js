function findNextSquare(sq) {
  if (String(sq).length === 0) {
    return null;
  }
  const sqr = Math.sqrt(sq);
  const some = sqr + 1;
  const result = some * some;
  const verify = Number.isInteger(result);
  if (verify) {
    return result;
  }
  return -1;
}
