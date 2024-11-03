function getCount(str) {
    return [...str].filter(data => ['a', 'e', 'i', 'o', 'u'].includes(data)).length
  }
  