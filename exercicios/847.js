
class Maisculas {
  #str;
  constructor(str) {
    this.#str =str;
  }

  verifiyMaisculas() {
    return this.#str == this.#str.toLowerCase();
  }
}


const objecto = new Maisculas("carlos")
console.log(objecto.verifiyMaisculas());