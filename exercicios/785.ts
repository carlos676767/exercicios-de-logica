class CountSmileys {
  private arr: string[];
  constructor(arr: string[]) {
    this.arr = arr;
  }
  private setCountSmileys() : number  {
    return this.arr.filter(data => data.match(/[:;][-~]?[)D]/g)).length
  }

  public getResult(){
    return this.setCountSmileys()
  }
}

const testes = new CountSmileys([';D', ':-(', ':-)', ';~)'])
console.log(testes.getResult());