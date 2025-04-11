const upperCase = (str) => {
  let value = ``;

  for (let i = 0; i < str.length; i++) {
    const num = str[i].charCodeAt();
    if (num >= 97 && num <= 122) {
      value += String.fromCharCode(num - 32);
    } else {
      value += str[i];
    }
  }

  return value;
};

console.log(upperCase(`carlos silva`));


