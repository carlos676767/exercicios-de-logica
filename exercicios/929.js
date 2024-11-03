function getAverage(marks){
    return Math.floor( marks.reduce((acc, ac) => acc + ac) / marks.length)
  }
  
  