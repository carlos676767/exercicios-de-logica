import math

                         #receber os valores
capitalinicial = float(input("digite o valor atual em R$:")) #pede ao usuario digitar o valor inicial
taxadejuros = float(input("digite a taxa de juros em R$:")) #pede ao usuario a taxa de juros anuais
anodeinvestimentos = float(input("digite quantos anos o dinheiro ficara investido:")) #pede quanto tempo o dinheiro ficara investido.



#calculos
somar = capitalinicial * math.pow(1+ taxadejuros/100, anodeinvestimentos) #faz o seguinte calculo capitla inical vezes a potencia elavada a um dividido por 100 o numeros de anos.
obterjuros = somar - capitalinicial #obtem apenas a taxa de juros 
resultado = "{:.2f}".format(somar) # coloca em duas casas decimais




#recebe o valor digitado no inicio
mensagem = f"O valor depositado foi de {capitalinicial}." #cria uma mensagem para ser exibida 
print(mensagem) #exibe a mensagem do valor depositado





#recebe o valor do dinheiro com a taxa de juros.
mensagem2 = f"o valor com taxa de juros foi de  {resultado}."  #faz uma mensagem para exibir o valor da taxa de juros com o valor depositado

print(mensagem2) #exibe a taxa de juros.

#obter apenas a taxa de juros.

mensagem3 = f"a taxa de juros foi de {obterjuros}." #faz uma mensagem para obter apenas a taxa de juros bruta.
print(mensagem3) #eibe a mensagem acima.



                               # agora ira fazer o mensal!
investimentoinicial = float(input("digite o valor inicial dos investimentos em R$"))
taxadejurosanual = float(input("digite a taxa de juros anual R$"))
numerodemeses = float(input("digite o numero de meses R$"))

#converta a taxa de juros em decimal

taxadejurosanual =  taxadejuros /100 #divide a taxa de juros por 100.

#agora vamos obter os calculos abaixo.

total = investimentoinicial * (1 + (taxadejurosanual / 100) / 12) ** (numerodemeses * 12) #calcula investimento vezes +1 taxa de juros dividido por 100 e divbido por 12 que no caso e 1 ano potencia numero de meses vezes 12.



#mostre os resultados ao usuario na tela

mostrar = f"a taxa de juros mensais foi de {total}."
print(mostrar)