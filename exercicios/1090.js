class HighAndLow {
    static highAndLow(arr){
     const sorted = arr.sort((a, b) => a - b)
     return String(sorted[0]) + " " + String( sorted[sorted.length - 1])
    }
   }
   
   console.log(HighAndLow.highAndLow([1, 2, 3, 4, 5]))
