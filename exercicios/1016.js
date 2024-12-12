function smallEnough(a, limit){
    let count = 0
  
    for (let i = 0; i < a.length; i++) {
      if(a[i] > limit){
       return false
      }
      
    }
  
    return true
  }
  