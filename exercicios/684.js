function abbrevName(name) {
  return name
    .split(" ")
    .map((data) => data.charAt().toUpperCase())
    .join(".");
}
