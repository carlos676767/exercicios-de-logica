// //Encontre a letra que falta
// Escreva um método que receba como entrada um array de letras consecutivas (crescentes) e que retorne a letra que falta no array.



// Você sempre obterá um array válido. E sempre estará faltando exatamente uma letra. O comprimento da matriz será sempre pelo menos 2.
// A matriz sempre conterá letras em apenas um caso.

// Exemplo:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use o alfabeto inglês com 26 letras!)

// Divirta-se codificando-o e não se esqueça de votar e classificar este kata! :-)

// Eu também criei outros katas. Dê uma olhada se você gostou deste kata!

function findMissingLetter(array) {
  const generateLetrasAsk = Array.from(Array(26).keys()).map((data) => String.fromCharCode(data + 97));
  for (let i = 0; i < array.length; i++) {
    let letraEsquerda = array[i].toLowerCase();
    let letraDireita = array[i + 1].toLowerCase();
    const verifyDireita = generateLetrasAsk.indexOf(letraEsquerda) + 1
    const letra = generateLetrasAsk.at(verifyDireita)
    if (letraDireita != letra) {
      if (array[0] === array[0].toUpperCase()) {
        return letra.toUpperCase()
      }
      return letra.toLowerCase()
    }
  }
}

console.log(findMissingLetter(["l", "m", "n", "o", "p", "q", "s"]));//'e'
//['O','Q','R','S']//'P'
[
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]

