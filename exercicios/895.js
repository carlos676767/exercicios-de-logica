function high(x){
 
    const alfatebto = Array.from(Array(26).keys()).map(data => String.fromCharCode(data + 97))
  
     const arr = x.split(' ').map(data => data.split(''))
  
     const arrValues = arr.map(data => data.map(arr => alfatebto.indexOf(arr) +1)
      .reduce((acc, ac) => acc + ac, 0))
  
     const maxValue =  Math.max(...arrValues)
  
     const indiceValue = arrValues.indexOf(maxValue)
  
     return arr.at(indiceValue).join('')
  }

