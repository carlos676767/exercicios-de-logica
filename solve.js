function solve(s) {
    const vogais = `aeiou`;
  
    s = s.toLowerCase();
    let sum = 0;
    let maior = 0
  
    for (let i = 0; i < s.length; i++) {
      if (vogais.includes(s[i])) {
        sum = 0;
      }else{
        sum += s[i].charCodeAt(0) - 96
  
        if (sum > maior) {
          maior = sum;
        }
      }
    }
  
    return maior
  }
  
  console.log(solve("strength"));
  