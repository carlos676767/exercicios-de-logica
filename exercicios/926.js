const buscaLinear = (arr, valor) => {

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] ===valor){
        return i
      }
  
      
    }
  
    return - 1
  };
  
  console.log(buscaLinear([4, 8, 9, 1], 44))
  
  