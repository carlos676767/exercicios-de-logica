function DNAtoRNA(dna) {
    return dna
      .split(``)
      .map((c) => {
        if (c == `T`) {
          return `U`;
        } else {
          return c;
        }
      })
      .join(``);
  }
  
  console.log(DNAtoRNA("GCAT"));
  