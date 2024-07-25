function findOutlier(integers) {
  const arr = [];
  const arr2 = [];
  let i = 0;
  while (i < integers.length) {
    if (integers[i] % 2 !== 0) {
      arr.push(integers[i]);
    }else{
      arr2.push(integers[i]);
    };
    ++i;
  };
  return arr.length == 1 ? Number(arr) : Number(arr2);
};

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
