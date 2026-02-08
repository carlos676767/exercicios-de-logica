function duplicateCount(text) {
    const texts = text.toLowerCase();
  
    const coutObject = {};
    let counts = 0;
  
    for (let i = 0; i < texts.length; i++) {
      if (!coutObject[texts[i]]) {
        coutObject[texts[i]] = 1;
      } else {
        coutObject[texts[i]]++;
      }
  
    
    }
  
    for (let i = 0; i < Object.keys(coutObject).length; i++) {
      if (coutObject[Object.keys(coutObject)[i]] > 1) {
        ++counts;
      }
      
    }
    return counts;
  }
  
  console.log(duplicateCount(`aabBcde`));
  