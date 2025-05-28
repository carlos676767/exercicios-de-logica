function multipleOfIndex( arr) {
    if(arr.length > 1){
     return arr.filter((char, i) => {
      return  char % i === 0;
    });
    }
  
    return [
  
    ]
  }
  
  
  console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))