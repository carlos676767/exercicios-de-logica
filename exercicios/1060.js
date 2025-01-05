class HasUniqueChars {
    #char; 
  
    constructor(char) {
      this.#char = char; 
    }
  

    hasUniqueChars() {
      const spretStr = [
        ...this.#char.split(``)
      ];

      return new Set(spretStr).size == this.#char
    }
  }
  

const newUSER = new HasUniqueChars(`carlos silva`)
console.log(newUSER.hasUniqueChars());