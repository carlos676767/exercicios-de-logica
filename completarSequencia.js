function completarSequencia(list) {
    const numLengh = list[list.length - 1] + 1;
  
    list = [...list, numLengh];
  
    const n = list[list.length - 1] + 1;
  
    return [...list, n];
  }
  
  console.log(completarSequencia([21, 22, 23], 10));