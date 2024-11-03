function removeExclamationMarks(s) {
    return s.split('').filter(data => data != '!').join('')
  }