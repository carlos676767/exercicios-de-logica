function descendingOrder(n) {
  const string = String(n);
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  
  const copiaMyArray = [...arr];
  arr = [];
  for (let i = 0; i < copiaMyArray.length; i++) {
    arr.push(Number(copiaMyArray[i]));
  }

  let junteValues = ""
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    junteValues += String(arr[i])
  }
  return Number(junteValues);
}

console.log(descendingOrder(123456789)); //987654321
