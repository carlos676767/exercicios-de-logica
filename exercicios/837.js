

function twoSort(s) {
  const list = s.sort()
  return list[0].split("").join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
