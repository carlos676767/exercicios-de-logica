def saber_par_ou_impar(num1):
    if num1 % 2 == 0:
        print(num1, " é par.")
    else:
        print(num1, " é ímpar.")

numeros = int(input("Digite um número para eu saber se é par ou ímpar: "))
saber_par_ou_impar(numeros)