function isIsogram(str) {
  let count = {}
  if (!str) {
    return true;
  }

  str.toLowerCase().split("").forEach((data) => {
    !count[data]  ?count[data] = 1 : count[data]++
  });

  const values = Object.values(count)
  .map(data => data >= 2)
  .filter(data => data == true) 
  return values.length == 0
}

console.log(isIsogram(""));
