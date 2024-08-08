function digitize(n) {
  const str = String(n);
  const arr = []
  for (let i = str.length - 1; i >= 0; i--) {
    let pegar = Number(str[i])
    arr.push(pegar)
  }
  return arr
}

console.log(digitize(35231));