
const cameCaselLetra0 = (str) => {
  const myArr = str.split(" ")
  let pegar = ""
  for (let i = 0; i < myArr.length; i++) {
    pegar += myArr[i].charAt(0).toUpperCase() + myArr[i]
  }
  return pegar
};

console.log(cameCaselLetra0("carlos silva"));