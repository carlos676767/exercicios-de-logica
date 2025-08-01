const validePa = (str) => {
  const list = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === `(`) {
      list.push(str[i]);
    } else if (str[i] === `)`) {
      if (!str) {
        return false;
      }

      list.pop();
    }
  }

  return list.length === 0;
};

console.log(validePa("(2+3)*(4-1)"));
