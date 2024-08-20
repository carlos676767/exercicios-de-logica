// Polimorfismo com Formas Geométricas

// Defina uma interface Shape com um método getArea().
// Crie classes para representar diferentes formas geométricas,
//  como Rectangle, Circle, e Triangle. Implemente o método getArea()
//   para calcular a área de cada forma.
//  Escreva uma função que aceite uma instância de Shape e imprima a área da forma.

interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  private altura: number;
  private largura: number;
  constructor(largura: number, altura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  getArea(): number {
    return this.largura * this.altura;
  }
}

class Circle implements Shape {
  private r: number;
  constructor(r: number) {
    this.r = r;
  }

  getArea(): number {
    return Math.PI * this.r * this.r;
  }
}

class Triangle implements Shape {
  private base: number;
  private altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  getArea(): number {
    return (this.base * this.altura) / 2;
  }
}
