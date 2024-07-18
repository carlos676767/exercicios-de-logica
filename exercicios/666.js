function sortByLength(array) {
  const myArray = array
 return myArray.reduce((a,b) => {
    if (a.length < b.length) {
      return a
    }
    return b
  })
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));