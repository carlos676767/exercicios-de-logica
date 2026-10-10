
function generateShape(size) {
    let shape = "";
    let currentPosition = 0;
    const totalPositions = size * size;
  
    while (currentPosition < totalPositions) {
      currentPosition++;
  
      shape += "+";
  
      if ( currentPosition % size === 0 && currentPosition < totalPositions) {
        shape += "\n";
      }
    }
  
    return shape;
  }
  
  console.log(generateShape(3));
  