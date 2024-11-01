function makeNegative(num) {
    if (isNaN(num)) {
      return -9; 
    }
    
   
    if (num < 0) {
      return num;
    }
  
   
    return -Math.abs(num);
  }
  
  

