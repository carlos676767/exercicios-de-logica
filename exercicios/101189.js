function positive_sum(arr) {
    return arr.filter(num => num >0).reduce((acc, ac) => acc + ac, 0)
  }
  