const elementsRepeat = (order) => {
  const count = {};


  for (const el of order) {
    if (!count[el]) {
      count[el] = [el];
    } else {
      count[el].push(el);
    }
  }
 

  return count;
};

console.log(elementsRepeat(["a", "b", "a", "c", "b"]));
