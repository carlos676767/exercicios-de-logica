function alphabetposition(char){
    const alfabeto = Array.from(Array(26).keys()).map(char => String.fromCharCode(char + 97))
    const retirednotStr = char.replace(/[^a-zA-Z0-9\s]/, ``)
    return retirednotStr
    .toLowerCase().split(``)
    .filter(chars => chars !== ` `).map(chars => {
      return alfabeto.indexOf(chars) + 1
    }).join(` `)
  }
  
  console.log(alphabetposition("The sunset sets at twelve o' clock."))