function sumMix(x) {
  return x
    .map((data) => {
      return typeof data === "string" ? Number(data) : data;
    })
    .reduce((acc, ac) => ac + acc, 0);
}
