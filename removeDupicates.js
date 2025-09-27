function removeDuplicates(list) {
    const values = list.sort((a, b) => a - b)
  
    return values.filter((chr, i) => chr != values[i + 1] ).sort((a, b) => a - b)
  }
  