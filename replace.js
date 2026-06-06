function replace(s) {
    const vogais = `aeiouAEIOU`.split(``);
    return s
      .split(``)
      .map((c) => {
        return vogais.includes(c) ? `!` : c;
      })
      .join(``);
  }
  
  console.log(replace("aeiou"));
  console.log(replace(`ABCDE`));
  