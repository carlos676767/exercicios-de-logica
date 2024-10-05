function firstNonRepeatingLetter(s) {

  if (s == undefined || s.length == "") {
    return "";
  }

  const count = {};

  const valueInArray = Array.from(s.toLowerCase());

  valueInArray.forEach((elemento) => {
    if (!count[elemento]) {
      count[elemento] = 1;
    } else {
      ++count[elemento];
    }
  });

  
  for (value in count) {
    if (count[value] === 1) {
        return value
    }
  }
}

console.log(firstNonRepeatingLetter("moonmen"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTreSS"));
