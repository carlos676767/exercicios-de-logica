function moveZeros(arr) {
  const totalezeros = arr.filter((data) => data === 0).length;
  const diferenteDezero = arr.filter((data) => data !== 0);
  const vetorDezeros = Array.from(Array(totalezeros).keys()).map(
    (data) => (data = 0)
  );

  return [...diferenteDezero, ...vetorDezeros];
}


