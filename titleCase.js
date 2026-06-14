function titleCase(title, minorWords) {
    const DEFAULTNUMBER = 0;
  
    if (title.length === DEFAULTNUMBER) {
      return ``;
    }
  
    const separeMinorWords = minorWords? minorWords.toLowerCase().split(` `): [];
  
    return title.toLowerCase().split(` `).map((c, i) => {
        if (i !== DEFAULTNUMBER && separeMinorWords.includes(c)) {
          return c;
        }
  
        return c[0].toUpperCase() + c.slice(1);
      })
      .join(` `);
  }
  
  console.log(titleCase("a clash of KINGS", "a an the of"));
  