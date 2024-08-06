function invert(array) {
  return array.map((data) => {
    if (data > 0) {
      const n = "-" + data;
      return Number(n);
    }
    const n = String(data).replace(/-/g, "");
    return Number(n);
  });
}

console.log(invert([1, -2, 3, -4, 5]));