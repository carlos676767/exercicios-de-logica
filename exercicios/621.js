function reverseWords(str) {
 const inverteStr =  str.split("").reduceRight((acc, c) => acc + c)
 return inverteStr.split(" ").reverse().join(" ")
}

console.log(reverseWords("This is an example!"));