function toWeirdCase(string) {
  return string
    .split(" ")
    .map((data) =>
      data
        .split("")
        .map((data, i) =>
          i % 2 === 0 ? data.toUpperCase() : data.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

//https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript