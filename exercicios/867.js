
class Product {
  #string
  constructor(string) {
    this.#string = string
  }

  product() {
    const inter = Array.from(this.#string).filter((data) => data == "?").length;
    const exclamacao = Array.from(this.#string).filter((data) => data === "!").length;
    return inter * exclamacao;
  }
}