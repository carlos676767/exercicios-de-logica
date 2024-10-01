function alphabetPosition(text) {
  const alfabeto = Array.from(Array(26).keys()).map((data) => String.fromCharCode(data + 97));

  const filterStringSpacext= text.toLowerCase().split('').filter(data => data != ' ')

  const filterStringPonto = filterStringSpacext.filter(data => data != '.')
  const retired = filterStringPonto.filter(data => data != `'`)

  const alfabetValue =  retired.map(data =>   alfabeto.indexOf(data) + 1 )
  return alfabetValue.filter(data => data != 0).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
