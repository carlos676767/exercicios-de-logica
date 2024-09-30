function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((data, i) => data[0].toUpperCase().concat(data.repeat(i)))
    .join("-");
}
