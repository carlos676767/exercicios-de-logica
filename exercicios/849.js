function squareOrSquareRoot(array) {
  return array.map((data) => {
    const values = Math.sqrt(data);
    const valueINteuiro = parseInt(Math.sqrt(data));
    if (values === valueINteuiro) {
      return valueINteuiro;
    }
    return data ** 2;
  });
}
