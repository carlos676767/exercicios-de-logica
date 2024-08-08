function longest(s1, s2) {
  const arr1 = s1.split("")
  const arr2 = s2.split("")
  const removedAll1 = [...arr1, ...arr2]
  const newSet = new Set(removedAll1)
  return Array.from(newSet).sort().join("")
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));//abcdefklmopqwxy