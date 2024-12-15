function encode(string) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return [...string].map((char) => vogais[char] || char).join(``);
}


function decode(string) {
  const vogais = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  return [...string].map((char) => vogais[char] || char).join(``);
}
