function sum(numbers) {
    let contador = 0;
    for (let i = 0; i < numbers.length; i++){
     contador += numbers[i]
    }
    if(numbers.length == []) return 0
    return contador
  }
  