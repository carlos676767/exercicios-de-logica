function spinWords(string){
    return (string).split(` `).map(chars => chars.length >= 5 ? chars.split(``).reverse().join(``) : chars).join(` `)
  }
  