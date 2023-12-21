function converterFparaC(f) {
  let converter = (5 * (f - 32)) / 9;
  return `A conversao de F para C e de ${converter.toFixed(2)}`;
}

console.log(converterFparaC(10));