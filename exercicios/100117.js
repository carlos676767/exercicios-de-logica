function abbrevName(name) {
  return name
    .split(` `)
    .map((char) => char[0])
    .join(`.`)
    .toUpperCase();
}



