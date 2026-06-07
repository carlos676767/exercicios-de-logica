function multipleOfIndex(array) {
  return array.filter((item, i) => {
    return item === 0 || item % i === 0;
  });
}
