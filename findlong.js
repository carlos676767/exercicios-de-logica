function findLongest(array) {
    let list = array[0];
  
    for (let i = 0; i < array.length; i++) {
      if (String(array[i]).length > String(list).length) {
        list = array[i];
      }
    }
  
    return list;
  }
  
  console.log(findLongest([22, 8, 88, 86, 444, 6654, 77]));
  