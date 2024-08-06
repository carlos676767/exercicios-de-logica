function arrayDiff(a, b) {
  return a.filter(data => !b.includes(data));
}

//dar o valor e eu removo um valor.
console.log(arrayDiff([1,2,3], [1,2])); //[1,3]