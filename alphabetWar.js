function alphabetWar(fight) {
    const left = {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
    };
  
    const right = {
      m: 4,
      q: 3,
      d: 2,
      z: 1,
    };
  
    const points = fight.split("").reduce(
      (acc, letter) => {
        acc.leftf += left[letter] || 0;
        acc.rightt += right[letter] || 0;
  
        return acc;
      },
      { leftf: 0, rightt: 0 }
    );
  
    const { leftf, rightt } = points;
  
    if (leftf === rightt) {
      return "Let's fight again!";
    }
  
    if (rightt > leftf) {
      return "Right side wins!";
    }
  
    return "Left side wins!";
  }
  
  console.log(alphabetWar("zdqmwpbs"));