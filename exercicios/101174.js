function arrayDiff(a, b) {
    return  a.filter(n => !b.includes(n) ) 
}

function testes(n){
    return new Promise((sucess, reject) => {
      if(n > 0){
        return sucess(`ok`)
      }
  
      reject(`reject value`)
    })
  }
  
  
  (async() => {
    try {
      const testes =  await testes(2)
      console.log(testes);
      
    } catch (error) {
        console.log(error);
        
    }
  })()