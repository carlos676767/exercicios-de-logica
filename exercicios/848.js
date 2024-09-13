function fixTheMeerkat(arr) {
  const array =  arr.sort((a, b) => a - b);
  const myArray = [array[array.length -1], array[array.length - 2], array[0]]
  return myArray
}

console.log(fixTheMeerkat(["tail", "body", "head"])); 
