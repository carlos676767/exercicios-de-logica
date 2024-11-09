function isPalindrome(x) {

    return [...x].reverse().join('').toLowerCase() === x.toLowerCase()
  
  }
  