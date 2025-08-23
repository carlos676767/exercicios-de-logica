function moveZeros(arr) {

    const list = []
    let zerosCount = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] !== 0) {
        list.push(arr[i])
      } else {
        ++zerosCount
      }
    }
  
    while (count < zerosCount) {
      ++count
      list.push(0)
    }
  
    return list
  }
  
  