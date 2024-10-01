// Dado um inteiro, retorne uma string com traços 
// '-' antes e depois de cada dígito ímpar, 
// mas não comece ou termine a string com um traço.

function dashatize(num) {
    return String(num).split('').map(data => {
      if(Number(data) %2 !== 0){
        return String(data).replaceAll(/(\w+)/g, "-$1-")
      }
      return data
    }).join('')
  }
  
  //Dado um inteiro, retorne uma string com traços 
  // '-' antes e depois de cada dígito ímpar, 
  // mas não comece ou termine a string com um traço.
  
  console.log(dashatize(274))//'2-7-4'
  console.log(dashatize(6815))// '68-1-5'


  