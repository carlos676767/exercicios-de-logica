function wordsToMarks(string) {
    const getAlfabteh = [...Array(26).keys()].map((c) =>
      String.fromCharCode(97 + c)
    );
  
    return string
      .split(``)
      .map((c) => getAlfabteh.indexOf(c) + 1)
      .reduce((a, b) => a + b);
  }
  
  console.log(wordsToMarks("attitude"));
  console.log(wordsToMarks("friends"));
  