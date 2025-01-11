function check(a, x) {
    let count = 0
  
    for (let i = 0; i < a.length; i++) {
      if(a[i] === x){
        ++count
      }
      
    }
  
    return count >= 1 
  }
  