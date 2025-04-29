function pigIt(str) {
    return str
      .split(' ')
      .map(char => /[a-zA-Z]/.test(char[0]) ? char.slice(1) + char[0] + 'ay' : char)
      .join(' ');
  }
  