function encode(string) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return [...string] .map((data) => {
    return vogais[data] ? vogais[data]
     : data;}).join("");
}

function decode(string) {
  const numeros = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  return [...string].map((data) => {
      return numeros[data] ? numeros[data] : data;
    }).join("");
}


// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript