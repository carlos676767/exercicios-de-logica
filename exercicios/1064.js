// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    const sortedArray = ages.sort((a, b) => b - a)
    return [
     sortedArray[1],
     sortedArray[0]
    ]
   }
   