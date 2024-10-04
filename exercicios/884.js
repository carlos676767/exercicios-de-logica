function isIsogram(str) {
  const set = new Set(str.toLowerCase());
  return set.size === str.length;
}
