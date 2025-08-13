function sumStrings(a,b) { 
    return (BigInt((a) ) + BigInt((b))).toString()
  }
  
  console.log(sumStrings("999999999999999999999999999999999999999999999999999999999999", `1`))
  console.log(sumStrings("1", "2")); 
  console.log(sumStrings("00123", "0456"));
  