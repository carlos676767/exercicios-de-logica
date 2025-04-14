function encodeEmail(email) {
    const splitStr = email.split(`@`);
    const atEmail =  `@` + splitStr[1];
    const resultValueName = splitStr[0].split(``).map(char => char = `*`).join(``)
    return resultValueName + atEmail
  }
  

