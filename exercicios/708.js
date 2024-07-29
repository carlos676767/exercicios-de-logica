function nextSmaller(n) {
  const arr =  String(n).split("").map(n => Number(n))
  let menor1 = arr[0]
  let menor2 = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > menor1) {
        menor1 = arr[i] 
    }
    if (menor1 > arr[i]) {
        menor1 = arr[i]
    }
  }
  return menor1
}

console.log(nextSmaller(531));