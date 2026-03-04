var uniqueInOrder = function (iterable) {
    if (typeof iterable != "string") {
      return iterable.filter((ch, i) => ch != iterable[i - 1]).join("");
    }
  
    return [...iterable].filter((ch, i) => ch != iterable[i - 1]).join("");
  };
  
  console.log(uniqueInOrder("AAAABBBCCDAABBB"));
  