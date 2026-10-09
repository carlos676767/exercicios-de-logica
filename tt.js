function stringClean(s) {
    let result = ``;
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i]) || s[i] === ` `) {
        result += s[i];
      }
    }
  
    return result;
  }
  
  console.log(stringClean("This looks5 grea8t!"));
  