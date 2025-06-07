const repite = (list) => {
    const count = {}
    for (let i = 0; i < list.length; i++) {
      if (count[list[i]]) {
        return list[i]
      } else {
        count[list[i]] = 1
      }
  
    }
  
    return - 1
  }
  