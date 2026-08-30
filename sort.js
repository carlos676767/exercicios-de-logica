class DubleSort {
    static orderValue(list, sinal) {
      const sinaisValid = [`>`, `<`];
      const unique = {};
  
      const operacoes = {
        ">": (a, b) => a > b,
        "<": (a, b) => a < b,
      };
  
      if (!sinaisValid.includes(sinal)) {
        return `The operation is not valid.`;
      }
  
      for (const i in list) {
        if (!unique[list[i]]) {
          unique[list[i]] = 1;
        } else {
          unique[list[i]]++;
        }
      }
  
      const onlyUnique = [];
  
      for (const i in unique) {
        if (unique[i] === 1) {
          onlyUnique.push(Number(i));
        }
      }
  
      for (let i = 0; i < onlyUnique.length; i++) {
        for (let j = i + 1; j < onlyUnique.length; j++) {
          if (operacoes[sinal](onlyUnique[i], onlyUnique[j])) {
            const temp = onlyUnique[j];
            onlyUnique[j] = onlyUnique[i];
            onlyUnique[i] = temp;
          }
        }
      }
  
      return onlyUnique;
    }
  }
  
  console.log(DubleSort.orderValue([6, 3, 3, 4, 73, 2, 3, 4, 3, 2, 19], `>`));
  