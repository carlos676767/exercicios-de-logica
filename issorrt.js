function isSortedAndHow(array) {
    const sortArr = array.sort();
  
    const condicion = sortArr.every((num) => sortArr.includes(num));
  
    if (condicion) {
      return `"yes, ascending"`;
    }
  
    return "yes, descending";
  }
  
  console.log(isSortedAndHow([1, 2, 3, 4, 5, 6, 7]));