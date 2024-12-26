function order(words){
    return words.split(` `).sort((charA, charB) => {
      return charA.match(/\d+/)[0] - charB.match(/\d+/)[0]
    }).join(` `)
  }
