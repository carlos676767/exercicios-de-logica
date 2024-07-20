function descendingOrder(n) {
  const string = String(n);
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  //converter string em number
  const copiaMyArray = [...arr];
  arr = [];
  for (let i = 0; i < copiaMyArray.length; i++) {
    arr.push(Number(copiaMyArray[i]));
  }

  //doubleSort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
      }
    }
  }
}
