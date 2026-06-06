function multiTable(number) {
    let tabuada = ``;
  
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = i * number;
      tabuada += `${i} * ${number} = ${sum}`;
  
      if (i < 10) {
        tabuada += `\n`;
      }
    }
  
    return tabuada;
  }