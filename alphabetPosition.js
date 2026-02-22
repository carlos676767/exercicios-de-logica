function alphabetPosition(text) {
  
    const strReplace = text.replace(/[^a-zA-Z\s]/g, " ");
    const strLower = strReplace.toLowerCase();
    const alfabeto = Array.from(
      Array(26)
        .keys()
        .map((c) => String.fromCharCode(97 + c))
    );
  
    return [...strLower]
      .filter((c) => c.trim())
      .map((char) => {
        return alfabeto.indexOf(char) + 1;
      });
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  