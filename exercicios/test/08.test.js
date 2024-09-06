// findMissing.test.js

const findMissing = require("../831");


test('Encontra o número ausente no array [1, 2, 3, 5, 6]', () => {
  expect(findMissing([1, 2, 3, 5, 6])).toBe(4);
});

test('Encontra o número ausente no array [10, 11, 12, 14, 15]', () => {
  expect(findMissing([10, 11, 12, 14, 15])).toBe(13);
});

test('Encontra o número ausente no array [3, 4, 5, 7, 8, 9]', () => {
  expect(findMissing([3, 4, 5, 7, 8, 9])).toBe(6);
});

test('Encontra o número ausente no array [100, 101, 102, 103, 104, 106]', () => {
  expect(findMissing([100, 101, 102, 103, 104, 106])).toBe(105);
});
