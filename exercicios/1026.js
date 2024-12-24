function findOutlier(integers) {
  const a = integers.filter((char) => char % 2 !== 0);
  const b = integers.filter((char) => char % 2 === 0);
  return a.length === 1 ? Number(a) : Number(b);
}
