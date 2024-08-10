function abbrevName(name) {
  const myArray = name.split(" ");
  const newStr = myArray[0][0] + "." + myArray[1][0];
  return newStr;
}
