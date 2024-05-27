def sorteiaNumero():
    #vamos criar um programa que vai sortea um numero de 0 a 10
    import random

    randomNumber = random.randint(0,10)
    while True:
        numero = int(input("Digite um valor de 0 a 10: "))
    
        if numero == randomNumber:
            print("PARABENS VOCE ACERTOU O NUMERO")
            break
        else:
            print("DIGITE OUTRO VALOR, VC ERROU")

sorteiaNumero()