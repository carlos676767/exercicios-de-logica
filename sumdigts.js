function sumDigits(number) {
    if (number < 0) {
      number = number * -1;
    }
  
    let sum = 0;
    while (number > 0) {
      const digit = number % 10;
      number = Math.floor(number / 10);
      sum += digit;
    }
  
    return sum;
  }