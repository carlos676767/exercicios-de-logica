class Filter_list {
  static filter(l) {
    const list = [];

    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] !== "string") {
        list.push(l[i]);
      }
    }

    return list;
  }
}

console.log(Filter_list.filter([1, 2, "a", "b"]));
