class SumArr {
  private ar: number[] = [];
  private sum: number = 0
  constructor(ar: number[]) {
    this.ar = ar;
    this.sum = this.setCalcule(0)
  }

  public set setCalcule(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        console.log("valores invalidos");
        break;
      }
      this.ar.push(arr[i])
      sum+= this.ar[i]
    }
  }
  
  public get getSum()  {
    return this.ar
  }
  
}

const arr = new SumArr([4,3,2,34,4])
arr.setCalcule = [3,2,42,23,3]
console.log(arr.getSum);
