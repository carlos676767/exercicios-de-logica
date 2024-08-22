

class StrCount {
  private str: string;
  private letter: string;
  constructor(str: string, letter: string) {
    this.str = str;
    this.letter = letter;
  }

  private strcount(): number {
   const count = this.str.split("")
   .reduce((acc: number, ac: string) => ac == this.letter ? acc + 1: acc, 0)
   return count
  }
  public result(){
    return this.strcount()
  }
}


const str = new StrCount('hello', 'l')
console.log(str.result());
