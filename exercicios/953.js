function invert(array) {
    return array.map(data => {
     return data < 0 ? Math.abs(data) : (-data)
    })
 }
 