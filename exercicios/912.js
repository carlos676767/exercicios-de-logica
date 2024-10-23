// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  const count = {};

  A.forEach((data) => {
    !count[data] ? (count[data] = 1) : ++count[data];
  });

  for (const i in count) {
    if (count[i] % 2 !== 0) {
      return Number(i);
    };
  };
};
