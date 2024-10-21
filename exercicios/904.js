function count(string) {

    const elementsEspalheedes = [...string]
  
    const count = {}
  
    elementsEspalheedes.forEach((data) => {
      if (!count[data]) {
        count[data] = 1
      } else {
        ++count[data]
      }
    })
  
    return count
  }
  
  console.log(count('aba'))