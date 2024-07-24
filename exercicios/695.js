function getLargerNumbers(a, b) {
    let maior1 = a[0]
    let maior2 = b[0]
    const arr = []
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
     if (a[i] > maior1) {
        maior1 = a[i]
        arr.push(maior1)
     }
     if (b[i] > maior2) {
        maior2 = b[i]
        arr.push(maior2)
     }
    }
  }
  return arr
}
console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
// [23, 64, 53, 17, 88]
