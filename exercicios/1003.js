function createPhoneNumber(numbers) {
    const dd = '(' + numbers.slice(0, 3).join('') + ')';
    return dd + ' ' + numbers.slice(3, 6).join('').concat('-').concat(numbers.slice(6, 10).join('')) ;   
};  
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));