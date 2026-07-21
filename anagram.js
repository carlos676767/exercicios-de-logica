function anamgrama(str, str2) {
    const strSplit = str.split(``);
  
    const sortStr = strSplit.sort();
  
    return str2.split(``).sort().join(``) == sortStr.join(``);
  }
  
  console.log(anamgrama(`amor`, `roma`));
  