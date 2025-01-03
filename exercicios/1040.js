function twoOldestAges(char){
    const sortedArr = char.sort((a, b) => b - a)
    return sortedArr.slice(0, 2)
  }
  
  console.log(twoOldestAges([1, 2, 10, 8]))