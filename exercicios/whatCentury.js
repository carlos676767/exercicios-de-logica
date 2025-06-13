function whatCentury(year) {
  const seculo = Math.ceil(Number(year) / 100);

  const lastTwo = seculo % 100;

  let suffix = "th";

  if (lastTwo !== 11 && lastTwo !== 12 && lastTwo !== 13) {
    const lastDigit = seculo % 10;
    if (lastDigit === 1) suffix = "st";
    else if (lastDigit === 2) suffix = "nd";
    else if (lastDigit === 3) suffix = "rd";
  }

  return `${seculo}${suffix}`;
}

console.log(whatCentury("1999"));
