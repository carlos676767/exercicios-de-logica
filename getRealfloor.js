function getRealFloor(n) {
  const defatultNum = 13;
  const zeroDefault = 0;
  const defaultNum2 = 2;

  if (n === zeroDefault) {
    return 0;
  }
  if (n < zeroDefault) {
    return n;
  }

  if (n > defatultNum) {
    return n - defaultNum2;
  }




  return n - 1;
}
