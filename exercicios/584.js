

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const palavra = str.split("");
  const array = Array.from("aeiou");
  let contador = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (array.includes(palavra[i])) {
      ++contador;
    }
  }
  return contador
}

console.log(getCount("carlos"));