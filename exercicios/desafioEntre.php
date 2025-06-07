<?php


// Problema do Cofre (Lógica)

// > Você tem um cofre com senha de 4 dígitos.
// A senha é um número entre 0000 e 9999.
// A cada tentativa, o sistema informa quantos dígitos corretos você acertou na posição correta.



function cofre(string $num): string | int{
    $acertos = 0;

    
    if (strlen($num) > 4 || strlen($num) < 4 ) {
      return "so aceita no maximo 4 digitos e tambem nao pode ser menor que 4";
    }
    
    $passDefine = "2546";
    
    for ($i=0; $i < strlen($num); $i++) { 
      if($num[$i] == $passDefine[$i]){
          ++$acertos;
      }
    }
    
    if($acertos === strlen($num)){
          return $acertos;
    }
    
    return "nao ha acertos";
}


var_dump(cofre("2544"));