function spinWords(string) {
  const arr = string.split(" ");
  let receberStringMaiorQueCinco = "";
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      receberStringMaiorQueCinco = arr[i];
      myArr.push(receberStringMaiorQueCinco.split("").reverse().join(""));
    } else {
      myArr.push(arr[i]);
    }
  }
  return myArr.join(" ");
}
console.log(spinWords("Hey fellow warriors"));
