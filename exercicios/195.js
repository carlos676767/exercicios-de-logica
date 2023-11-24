function fibonacci(n) {
    let seq = [0, 1];
    
    for (let i = 2; i <= n; i++) {
      seq[i] = seq[i - 1] + seq[i - 2];
    }
  
    return seq[n];
  }
  
  let n = 1;
  console.log(fibonacci(n));
  