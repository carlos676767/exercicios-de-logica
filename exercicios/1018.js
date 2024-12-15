function getCount(str) {
    return [
      ...str
    ].filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char)).length
  }
  
  
  console.log(getCount(`carlos`))