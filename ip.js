function isValidIP(str) {
    const test = str.split(/\./).map(Number);
    const parts = str.split(".");
  
    if (test.length > 4 || test.length < 4) {
      return false;
    }
  
    let count = 0;
    let count2 = 0;
  
    for (let i = 0; i < test.length; i++) {
  
      if (isNaN(test[i]) || test[i] > 255 || test[i] < 0) {
        return false;
      }
  
      count = test[i];
      count2 = test[i + 1];
  
     
      if (String(test[i]) !== parts[i]) {
        return false;
      }
    }
  
    return true;
  }
  