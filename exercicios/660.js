function getMiddle(s) {
  const name = s.split("");
  const getLengthArray = name.length;
  const my = getLengthArray / 2;
  if (getLengthArray % 2 === 0) {
    const str = [...name[my - 1], ...name[my]].join("");
    return str;
  }
  return name.at(my);
};

