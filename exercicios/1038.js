class SpinWords {
    static spinWords(str){
     return str.split(` `).map(char => {
       if(char.length >= 5){
         return char.split(``).reverse().join(``)
       }
       return char
     }).join(` `)
    }
 }
 
 console.log(SpinWords.spinWords("Hey fellow warriors" ))