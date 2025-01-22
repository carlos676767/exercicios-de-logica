function AbbrevNamee(name) {
    const vacetor = [];
  
    for (let i = 0; i < name.length; i++) {
      if (name[i] === ` `) {
        vacetor.push(name[i - 1]);
        vacetor.push(name[i + 1]);
      }
    }
  
    const str = vacetor[2] + `.` + vacetor[1];
    
    let values = ``;
    const alphabetObject = {
        a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
        f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
        k: 'K', l: 'L', m: 'M', n: 'N', o: 'O',
        p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T',
        u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z'
      };

  
    for (let i = 0; i < str.length; i++) {
      const stringinLowerCase = str[i].toLowerCase();
  
      if (alphabetObject[stringinLowerCase]) {
        values += alphabetObject[stringinLowerCase];
      } else {
        values += str[i];
      }
    }
  
    return values;
  }
  console.log(AbbrevNamee(`Sam Harris `));
  