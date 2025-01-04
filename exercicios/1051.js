class CountPositivesSumNegatives {
    static  countPositivesSumNegatives(arr){
      const countPositive = arr.filter(char => char > 0).length
      const sumNgeatie = arr.filter(char => char < 0).reduce((a,b) => a - b, 0)
      return [
        countPositive,
        -sumNgeatie
      ]
    }
}

console.log(CountPositivesSumNegatives.countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
