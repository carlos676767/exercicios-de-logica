function generateHashtag(str) {
    if (str.trim().length === 0) {
      return false;
    }
  
    const string = str.trim().split(` `);
  
    const result =
      `#` +
      string
        .filter((c) => c !== ``)
        .map((c) => {
          const valueINidce0 = c.split(``);
  
          if (!valueINidce0[0]) return "";
  
          const save = valueINidce0[0].toUpperCase() + c.slice(1);
  
          return save;
        })
        .join(``);
  
    if (result.length > 140) {
      return false;
    }
  
    return result;
  }
  
  console.log(generateHashtag(" Hello there thanks for trying my Kata"));
  