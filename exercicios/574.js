function reverseWords(str) {
  const str2 = str.split("").reverse().join("")
  return str2.split(" ").reverse().join(" ")
}


