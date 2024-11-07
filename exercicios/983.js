function correct(string) {
  return string
    .split(``)
    .map((char) => {
      return char === "5"
        ? "S"
        : char === "0"
        ? "O"
        : char === "1"
        ? "I"
        : char;
    })
    .join(``);
}
