const ehSim = (list) => {
    const ehPar = list.filter(char => char %2 === 0)
    const eImpar = list.filter(char => char %2 !==0)
  
    const minValue =  Math.min(...list)
    const max = Math.max(...list)
  
  
    const media = list.reduce((a,b) => a + b, 0)/list.length
  
    return media
  }
  
  console.log(ehSim([5, 8, 12, 7, 3, 9, 6, 1]
  ))