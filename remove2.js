function remove(s, n) {
  const exclamation = `!`;

  const splitExcltion = s.split(``).filter((c) => c == exclamation);

  if (n > splitExcltion.length) {
    return s.replace(/!/g, ``);
  }

  for (let i = 0; i < n; i++) {
    s = s.replace(`!`, ``);
  }
  return s;
}

console.log(remove("!Hi!", 1));
