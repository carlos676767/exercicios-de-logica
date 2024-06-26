

const arr1 = Array.from(str1)
    const arr2 = Array.from(str2)
    let contadorStr1 = 0
    let contadorStr2 = 0
    for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !=arr2[i]) {
              ++contadorStr1
          }
        if (arr2[i] != arr1[i]) {
            ++contadorStr2
        }
        if (contadorStr1 <= 1 || contadorStr2 <= 1) {
            return true
        }
    }
  console.log(contadorStr1, contadorStr2)

  
console.log(mispelled("carlos", "carlos"))