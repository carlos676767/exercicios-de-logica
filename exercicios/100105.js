class RetorneAlbeth {
    static albeth(n) {
      const alfabeth = Array.from(Array(26).keys()).map(char => String.fromCharCode(char + 97))

      return alfabeth.slice(0,n)
    }
}

console.log(RetorneAlbeth.albeth(10));