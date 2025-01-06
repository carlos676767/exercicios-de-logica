function stray(numbers) {
    const count ={
  
    }
    numbers.forEach((char) => {
    if (!count[char]) {
      count[char] = 1; 
    } else {
      count[char]++; 
    }
  });
  return Number(Object.keys(count).find(chars => count[chars] === 1))
  };
  