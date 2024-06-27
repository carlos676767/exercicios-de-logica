// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

function findSmallestInt(arr) {
  let menor = Math.min();
  arr.forEach((arr, i) => {
    arr < menor ? (menor = arr) : menor;
  });
  return menor;
}

findSmallestInt([34, -345, -1, 100]);