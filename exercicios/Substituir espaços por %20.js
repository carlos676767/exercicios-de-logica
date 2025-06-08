function sub(str) {
    let my = ``
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        my += `%20`
      } else {
        my += str[i]
      }
    }
  
    return my
  }
  
  console.log(sub("meu nome"))