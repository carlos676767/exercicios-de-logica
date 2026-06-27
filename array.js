
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));


function array(string) {
  const splitStr = string.split(",");

  const getIndice1 = splitStr.slice(1);

  const getIndice = getIndice1.slice(0, -1);

  return getIndice.length > 0 ? getIndice.join(" ") : null;
}