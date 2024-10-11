class TrianguloEquilatero:
    def __init__(self, altura: int, lado: int) -> None:
        self.altura = altura
        self.lado = lado

    def verificarTriangulo(self) -> str:
        if self.altura == self.lado:
            return 'É um triângulo equilátero.'
        else:
            return 'Não é um triângulo equilátero.'


triangulo = TrianguloEquilatero(5, 5)
print(triangulo.verificarTriangulo())




    





