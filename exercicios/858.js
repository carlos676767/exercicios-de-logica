const promesa = (n1) => {
  return new Promise((sucess, reject) => {
    if (n1 < 0) {
      reject("valor negatico");
    } else {
      sucess("val;or pos");
    }
  });
};
