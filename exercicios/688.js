function sortByLength(array) {
  return array
    .filter((data) => data != " ")
    .sort((a, b) => a.length - b.length);
}
