function Cryptor(str) {
  const strEmArray = Array.from(str);
  const alfabeto = Array.from(Array(26).keys()).map((arr) =>
    String.fromCharCode(arr + 97)
  );
  return strEmArray.map((data) => alfabeto.indexOf(data) + 1).join("");
}

console.log(Cryptor("mamaco"));
