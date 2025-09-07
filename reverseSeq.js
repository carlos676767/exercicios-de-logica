const reverseSeq = n => {

    return Array.from(Array(n + 1).keys()).slice(1).sort((a, b) => b - a)
  };
  
  console.log(reverseSeq(5))