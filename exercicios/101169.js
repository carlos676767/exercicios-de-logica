function hasUniqueChars(str){
    const arr = Array.from(str)
    return new Set(arr).size === str.length
  }


