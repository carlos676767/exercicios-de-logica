function accum(s) {
    return s.toLowerCase()
      .split("")
      .map((data, i) => data.charAt(0).toUpperCase() + data.repeat(i, 1)).join("-")
  }