var isAnagram = function (test, original) {
    if(test.length !== original.length){
      return false
    }
    const testInLower = test.toLowerCase().split('').sort().join('');
    const originls = original.toLowerCase().split('').sort().join('');
    
    
    return originls === testInLower
    };
    