function toWeirdCase(str) {
    const strSplit = str.split(` `);
  
    const separeStrings = strSplit.map((chars) => {
      return chars.split(``).map((char, i) => {
        return i %2 === 0 ? char.toUpperCase() : char.toLowerCase()
      }).join(``)
    }).join(` `);
  
    return separeStrings
}
  
console.log(toWeirdCase("Weird string case"));
  