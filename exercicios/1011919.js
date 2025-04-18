function countBits(n) 
{
  return n.toString(`2`).split(``).filter(char => char === `1`).length
  
}

console.log(countBits(1234))