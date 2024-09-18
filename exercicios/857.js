function maskify(cc) {
  const str = cc.split("").reverse().slice(0, 4).reverse().join("");``
  return "#".repeat(cc.length - str.length) + str;
};


