function breachAttempts(hackers, securityLevel, increase) {
    let attac = 0;
    if (hackers.length == 0) {
      return 0;
    }
  
    hackers.forEach((hacker) => {
      if (hacker > securityLevel) {
        ++attac;
      } else {
        securityLevel += increase;
      }
    });
  
    return attac;
  }
  
  
  
  