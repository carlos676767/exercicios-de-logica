function dataReverse(data) {
    const list = [];
  
    for (let i = 0; i < data.length; i += 8) {
      list.push(data.slice(i, i + 8));
    }
  
    return list.toReversed().flat();
  }
  
  console.log(
    dataReverse([
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1],
    ])
  );
  