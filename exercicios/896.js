function incrementString(strng) {
  const converterNumber = strng.split(``).findIndex(data => !Number.isNaN(Number(data)))

  const pegarValuesNumber = strng.slice(converterNumber)

   return strng.slice(0,converterNumber) + ( Number(pegarValuesNumber) +1) 
}

console.log(incrementString(`foobar000`));
