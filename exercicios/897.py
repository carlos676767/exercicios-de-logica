def calcularMedia(n1, n2, n3):
    media = (n1 + n2 + n3) / 3
    
    alunoAcimaDaMedia = 7
    alunoMediaBaixa = 5
    
    if media >= alunoAcimaDaMedia:
        print('O aluno está acima da média.');
    elif media >= alunoMediaBaixa:
        print('O aluno está um pouco abaixo da média.');
    else:
        print('Reprovado') 
        
        
        
calcularMedia(4,2,9)