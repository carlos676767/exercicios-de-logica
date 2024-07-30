function rgb(r, g, b) {
  function Converter(nu) {
    const valueHecima = nu > 255 ? (nu = 255) : nu;
    const valueValideNegative = valueHecima < 0 ? (valueHecima = 0) : valueHecima;
    const temp = valueValideNegative.toString(16).toUpperCase();
    return temp.length == 1 ? "0"+ temp : temp;
  }
  return Converter(r) + Converter(g) + Converter(b);
};

console.log(rgb(148, 0, 211)); //9400D3
console.log(rgb(0, 0, 0)); // "FFFFFF"
console.log(rgb(148, 0, 211)); //"FFFFFF"
console.log(rgb(300, 37, 233)); //B525E9
console.log(rgb(300, 37, 233)); //B525E9
console.log(rgb(255, 255, 255)); //B525E9
console.log(rgb(90, 12,2)); //B525E9
