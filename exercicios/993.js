const somarPares = (arr) => arr.filter(data => data %2 === 0).reduce((acc, ac) => acc + ac, 0)
console.log(somarPares([5,3,7,8,9,10]))