function findUniq(arr) {
  const contador = {};
  for (let i = 0; i < arr.length; i++) {
    if (contador[arr[i]]) {
      ++contador[arr[i]];
    } else {
      contador[arr[i]] = 1;
    }
  }

  for (let key in contador) {
    if (contador[key] == 1) return Number(key);
  }
}
