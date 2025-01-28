function XO(str) {
    str = str.toLowerCase();
     const filterX = str.split('').filter(char => char === 'x').length;
     const filterO = str.split('').filter(char => char === 'o').length;
     
     if (filterX === filterO) {
         return true;
     }
 
  
     if (filterX === 0 && filterO === 0) {
         return true;
     }
 
     return false;
 }
 