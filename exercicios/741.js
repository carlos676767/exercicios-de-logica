function digitize(n) {
  return String(n).split("").reduceRight((a,b) => a + b).split("").map(data => Number(data))
}

console.log(digitize(35231));
//[1,3,2,5,3]