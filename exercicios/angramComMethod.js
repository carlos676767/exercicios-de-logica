const anagragama = (str, str2) => {
    return [...str.toLowerCase()].sort().join(``) === str2
  }
  
  console.log(anagragama("Roma", "amo