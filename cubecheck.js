function cubeChecker(volume, side) {
  const DEFAULTNUMERR = 0;
  if (volume <= DEFAULTNUMERR || side <= DEFAULTNUMERR) {
    return false;
  }

  return Math.pow(side, 3) === volume;
}
