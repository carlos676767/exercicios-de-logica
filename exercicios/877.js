function spinWords(string){
    return string.split(' ').map(data => {
      if(data.length >= 5){
        return data.split('').reverse().join('')
      }
      return data
    }).join(' ')
  }
  