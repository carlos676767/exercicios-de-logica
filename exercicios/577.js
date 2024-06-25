
const _ = require("lodash");

const arr1 = [4, 9, 1, 1, 2, 6, 44];
const arr2 = [5, 1, 2, 1, 9, 25, 4, 4, 444];
const compare = _.difference(arr1, arr2);
console.log(compare);
