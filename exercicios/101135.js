function accum(s) {
  return s
    .toLowerCase()
    .split(``)
    .map((char, i) => char[0].toUpperCase() + char.repeat(i))
    .join(`-`);
}
