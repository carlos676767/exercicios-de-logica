function DNAtoRNA(dna) {
    let str = ``;
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === `T`) {
        const save = (dna[i] = `U`);
        str += save;
      } else {
        str += dna[i];
      }
    }
  
    return str;
  }
  
  console.log(DNAtoRNA("GCAT"));