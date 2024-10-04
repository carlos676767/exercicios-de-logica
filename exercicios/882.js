function countSmileys(arr) {
    const smileyPattern = /^[:;][-~]?[)D]$/; 
    return arr.filter(data => smileyPattern.test(data)).length
  }
  