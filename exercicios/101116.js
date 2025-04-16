const solution = (string) => {
    let strValue = ``
    for (let i = string.length - 1; i > 0; --i) {
      strValue += string[i]
    }
  
    return strValue
  }
  
  
  console.log(solution(`carlos`))