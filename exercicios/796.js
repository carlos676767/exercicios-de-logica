function enough(cap, on, wait) {
    const pessoas = on
    const sum = pessoas + wait
    return sum <= cap ? 0 : Math.abs(cap - sum)
  }