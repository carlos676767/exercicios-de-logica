function reverseWords(str) {
  const str2 = str.split("").reverse().join("").split(" ").reverse().join(" ")
  return str2
}

