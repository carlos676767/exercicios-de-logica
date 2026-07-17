

function hello(name) {
 
    if (!name) {
      return "Hello, World!";
    }
  
  
  name =  name.toLowerCase();
     return `Hello, ${name[0]. toUpperCase()}${name.slice(1)}!`
  }
  
  console.log(hello(`carlos`));
  



