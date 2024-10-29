function validBraces(braces){
    const regex =  /\(\)|\[\]|\{\}/g
    return regex.test(braces)
  }
  
  console.log(validBraces('()'))