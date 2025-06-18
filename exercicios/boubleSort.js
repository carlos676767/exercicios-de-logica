const orderList = (list) => {


    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i] < list[j]) {
          const temp = list[i]
  
          list[i] = list[j]
          list[j] = temp
        }
  
      }
    }
    return list
  }
  
  console.log(orderList([5, 2, 9, 2, 1, 9, 6]
  ))