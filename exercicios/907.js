function abbrevName(name) {
  return name
    .split(" ")
    .map((data) => data[0].toUpperCase())
    .join(".");
}
