function repeatStr(s, n) {
  let value = "";
  for (let i = 0; i <= n; i++) {
    value += s;
  }
  return value;
}

console.log(repeatStr("ola meu nome e carlos", 1000));
