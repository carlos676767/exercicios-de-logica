function fixTheMeerkat(arr) {
  const array =  arr.sort((a, b) => a - b);
  const myArray = []
  myArray.push(array[array.length -1])
  myArray.push(array[array.length - 2])
  myArray.push(array[0])
  return myArray
}

console.log(fixTheMeerkat(["tail", "body", "head"])); 
