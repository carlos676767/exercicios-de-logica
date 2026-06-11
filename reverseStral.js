function reverseLetter(str) {
    return str
      .split(``)
      .filter((char) => /[a-z]/.test(char))
      .reverse()
      .join(``);
  }