




const ordenar = () => {
    const matri = [
    [5, 2, 9],
    [10, 1, 6],
    [4, 7, 3]
  ]
    for (let i = 0; i < matri.length; i++) {
      for (let j = 0; j < matri.length; j++) {
        if(matri[i][i] < matri[j][j]){
          const temp = matri[i][i]
          matri[i][i] = matri[j][j]
          matri[j][j] = temp
        }
      }
    }
    console.log(matri)
  }
  
  ordenar()