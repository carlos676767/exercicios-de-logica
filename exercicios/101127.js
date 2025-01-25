
function longest(s1, s2) {
  const list = [...new Set(s1), ...new Set(s2)].sort();

  return Array.from(new Set(list)).join(``);
}
  