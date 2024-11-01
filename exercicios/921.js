const removerDuplicatas = (arr) => {
    const vector = [
  
    ]
  
    for (let i = 0; i < arr.length; i++) {
      if (!vector.includes(arr[i])) {
        vector.push(arr[i])
      }
    }
    return vector
  }