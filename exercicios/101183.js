String.prototype.camelCase = function () {

    return this.split(` `)
    
      .map((char) => {
  
        return char.charAt(0).toUpperCase().concat(char.slice(1));
  
      })
      .join(``);
  
  };
  