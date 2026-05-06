function findMissingLetter(array) {
  const arr = array.map((c) => c.toLowerCase());
  const alfabeth = Array.from(Array(26).keys()).map((c) =>
    String.fromCharCode(c + 97)
  );

  return alfabeth.filter((c) => c.includes(arr));
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

console.log(findMissingLetter(["O", "Q", "R", "S"]));
