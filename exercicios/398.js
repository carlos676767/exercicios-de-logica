function getMiddle(s) {
    const palavra = s;
    if (palavra.length % 2 !== 0) {
      console.log(`ímpar`);
    }else{
        console.log(`par`);
    }
    return palavra;
  }
  
getMiddle(``);