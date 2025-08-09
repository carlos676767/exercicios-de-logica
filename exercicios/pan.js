function isPangram(string) {

    const min = []
    const especiais = [
    '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    ',', '.', '<', '>', '/', '?', '|', '\\', '"', '\''
  ];
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= `A` && string[i] <= `Z`) {
        const value = string[i].charCodeAt() + 32
        min.push(String.fromCharCode(value))
  
      } else if (string[i] !== ` `) {
        min.push(string[i])
      }
    }
  
  
    for (let i = 0; i < min.length; i++) {
      for (let j = 0; j < min.length; j++) {
        if (min[i] < min[j]) {
          const temp = min[i]
          min[i] = min[j]
          min[j] = temp
        }
      }
  
    }
  
    return min
  }
  
  console.log(isPangram("The   quick brown fox jumps over the lazy dog."))