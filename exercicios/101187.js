class Palindromo {
    static isPalindromo(str) {
      const strReverse = str.split(``).reverse().join(``)
      return strReverse === str
    }
  }
  