console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));

function array(string) {
  let lisy = ``;
  string = string.split(`,`);

  for (let i = 1; i < string.length - 1; i++) {
    lisy += string[i];
  }

  return lisy.length > 0 ? lisy : null;
}
