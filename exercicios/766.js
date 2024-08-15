const countBits = (n) => {
  const str = n
    .toString(2)
    .split("0")
    .filter((data) => data !== "")
    .join("");
  return str.length;
};
