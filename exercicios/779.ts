interface Count {
  [key: string]: number; 
}

class DuplicateCount {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }
  private  duplicateCount(): number{
    const text = this.text.toLowerCase().split("")
    const count: Count = {}
    text.forEach((data: string) => {
    !count[data] ? count[data] = 1 : ++count[data];
    })
    return Object.values(count).filter(data => data > 1).length
  }
  public returnResult() : number{
    return this.duplicateCount()
  }
}

const str = new DuplicateCount('aaaa')
console.log(str.returnResult());
