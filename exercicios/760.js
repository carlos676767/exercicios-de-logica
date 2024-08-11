function moveZeros(arr) {
    let contador = 0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === 0 || arr[i] === +0){
        ++contador
        arr.splice(i, 1)
       --i
      }
    }
    while (contador > 0) {
        --contador
        arr.push(0)
    }
    return arr
}
console.log(moveZeros([0, 1, 0, 3, 12])) //[1, 2, 1, 1, 3, 1, 0, 0, 0, 
