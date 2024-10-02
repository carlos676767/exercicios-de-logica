
function getMiddle(s)
{
  const meio = Math.floor(s.length / 2) 
  if(s.length %2 === 0){
    return  s[meio - 1] +s[meio][0]
  }

  return s[meio]
};

