function countSheeps(sheep) {
    let contador = 0
    for (let i = 0; i < sheep.length; i++) {
      if(sheep[i] == true){
        ++contador
      }
    }
    return contador
  }