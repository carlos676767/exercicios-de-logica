String.prototype.isUpperCase = function () {
    let count = 0;
  
    const upperCaseStr = this.toUpperCase();
    for (let i = 0; i < this.length; i++) {
      if (this[i] === upperCaseStr[i]) {
        count++;
      }
    }
  
    return count === this.length;
  };
  
  console.log("HELLO".isUpperCase());
  console.log("Hello".isUpperCase());
  