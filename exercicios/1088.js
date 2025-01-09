class Camel_case {
    static camel_case(str){
     return str.split(` `).map(chars => chars[0].toUpperCase() + chars.slice(1)).join(``)
    }
 }
 
 console.log(Camel_case.camel_case("camel case word"))