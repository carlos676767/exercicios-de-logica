function spinWords(string) {
  return string
    .split(" ")
    .map((data) => {
      return data.length >= 5 ? data.split("").reverse().join("") : data;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
