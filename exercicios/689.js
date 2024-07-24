// const mimi = array
// .filter((data) => data != " ")
// .sort((a, b) => a.length - b.length);

function sortByLength(array) {
  const arr = array;
  const myArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != " " || arr[i] != "") {
      myArray.push(arr[i]);
    }
  }
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      if (myArray[i].length < myArray[j].length) {
        const temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
      }
    }
  }
  return myArray;
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
