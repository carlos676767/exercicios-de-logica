const separarNumeros = (n) => {
    return n.reduce(
      (objectValues, numero) => {
        if (numero <= 0) {
          ++objectValues.negativos;
        }
  
        if (numero > 0) {
          ++objectValues.positivos;
        }
  
        if (numero === 0) {
          ++objectValues.zero;
        }
        return objectValues;
      },
      {
        positivos: 0,
        negativos: 0,
        zero: 0,
      }
    );
  };
  
  console.log(separarNumeros([1, -2, 0, 5, -7, 0, 3]));
  