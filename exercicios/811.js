function highAndLow(numbers){
    const n = numbers.split(" ").map(data => Number(data)).sort((a,b) => a - b)
    const my = [n[0], n.pop()].reverse().join(" ")
    return my
  }
  