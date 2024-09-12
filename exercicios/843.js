function validateCode(code) {
  const regex = /^[1-3]/;
  return regex.test(code);
}
