const strCamelCase = () => {
  const str = "hello case buenos oi me chamo carlos".split(" ");
  for (let j = 0; j < str.length; j++) {
    str[j] = str[j].slice(1).charAt(0);
  }
  console.log(str);
};
strCamelCase();
