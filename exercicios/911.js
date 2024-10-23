// O objetivo deste exercício é converter uma string em uma nova string onde cada
//  caractere na nova string é "(" se esse caractere aparece apenas uma vez na string
//  original, ou ")" se esse caractere aparece mais de uma vez na
// string original. Ignore a capitalização ao determinar se um caractere é uma duplicata.

 function duplicateEncode(word) {
  const letters = [...word.toLowerCase()];
  const count = {};
  letters.forEach((littlers) => {
    if (!count[littlers]) {
      count[littlers] = 1;
    } else {
      ++count[littlers];
    }
  });
  
  return letters.map(data => {
    return count[data] > 1 ? ')' : '('
  }).join('')
}

console.log(duplicateEncode("recede"));
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript