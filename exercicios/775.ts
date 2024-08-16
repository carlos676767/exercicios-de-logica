class BreakChocolate {
  private n: number;
  private m: number;
  constructor(n: number, m: number) {
    this.m = m;
    this.n = n;
  }

  private breakChocolate() {
    const result = this.m * this.n - 1;
    return result < 0 ? 0 : result;
  }

  public result() {
    return this.breakChocolate();
  }
}

const instance = new BreakChocolate(5, 5);
console.log(instance.result());
