class isPalindrome {
    static isPalindrome(str){
     return str === [
        ...str
      ].reverse().join(``)
    }
  }
  
  console.log(isPalindrome.isPalindrome(`ana`))