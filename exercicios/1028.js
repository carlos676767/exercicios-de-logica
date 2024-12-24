function longest(s1, s2) {
  const uniqueS1 = new Set(s1);
  const uniqueS2 = new Set(s2);
  const list = [...uniqueS1, ...uniqueS2].sort();

  return Array.from(new Set(list)).join(``);
}