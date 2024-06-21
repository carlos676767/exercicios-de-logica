function createPhoneNumber(numbers){
    const tell = numbers.replace("($1) $2-$3", /^(\d{3})(\d{3})(\d{4})$/)
    console.log(tell);
  }

  createPhoneNumber([12387411])