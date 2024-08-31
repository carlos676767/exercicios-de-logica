// Um pangrama é uma frase que contém cada letra
// do alfabeto pelo menos uma vez. Por exemplo, a
// frase "The quick brown fox jumps over the lazy dog"
//  é um pangrama, porque usa as letras A-Z pelo menos uma vez
//  (maiúsculas e minúsculas são irrelevantes).

// Dada uma string, detecte se é ou não um pangrama.
// Retorne True se for, False se não for. Ignore números e pontuação.

function isPangram(string) {
    const alfabeto = Array.from(Array(26).keys()).map((alfabeto) => String.fromCharCode(alfabeto + 97));
    const conjuntoSet = new Set( string.toLowerCase().replace(/[^a-z]/g, ''))
    return Array.from(conjuntoSet).length === 26 
};


console.log(isPangram(" quick brown fox jumps over the lazy dog."));


function isPangram(string) {
    if(string.length < 26) return false
    const alfabeto = Array.from(Array(26).keys())
    .map((alfabeto) => String.fromCharCode(alfabeto + 97));
    const test = alfabeto.map(letra => string.includes(letra))
    

    return !test.includes(false)
}