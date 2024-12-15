var uniqueInOrder=function(iterable){
    const list = [
  
    ]
    for (let i = 0; i < iterable.length; i++) {
  
      if(iterable[i] != iterable[i+ 1]){
        list.push(iterable)
      }
    }
  
    return list
  }
  