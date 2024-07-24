class SortByLength {
  myArray: string[] = [];
  newArray: string[] = [];
  constructor(myArray: string[] = [], newArray: string[] = []) {
    this.myArray = myArray;
    this.newArray = newArray;
  }

  private checKemptySpaces() {
    for (let i = 0; i < this.myArray.length; ++i) {
      if (this.myArray[i] != " " || this.myArray[i] != "") {
        this.newArray.push(this.myArray[i]);
      }
    }
  }

  public doubleSort() {
    this.checKemptySpaces();
    for (let i = 0; i < this.newArray.length; i++) {
      for (let j = 0; i < this.newArray.length; ++i) {
        if (this.newArray[i].length < this.newArray[j].length) {
          const temp: string = this.newArray[i];
          this.newArray[i] = this.newArray[j];
          this.newArray[j] = temp;
        }
      }
    }
    return this.newArray;
  }
}
