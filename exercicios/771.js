function fakeBin(x) {
  return x
    .split("")
    .map((data) => {
      return data < 5 ? (data = 0) : (data = 1);
    })
    .join("");
}
