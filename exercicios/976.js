function oddOrEven(array) {
    return array.reduce((acc, ac) => acc + ac, 0) %2 ===0 ? 'even': 'odd'
 }