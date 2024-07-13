function countSheeps(sheep) {
    return sheep.reduce((acc, value) => {
      if (value === true) {
        return ++acc
      }
      return acc
    }, 0)
  }