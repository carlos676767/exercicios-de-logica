function printerError(s) {

    let err = 0
    const t = s.length
    for (let i = 0; i < s.length; i++) {
      if(s[i] < `a` || s[i] > `m`){
        ++err
      }
      
    }
  
  
    return err + "/" + t;
  }