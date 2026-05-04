function areYouPlayingBanjo(name) {
    const firstLetter = name[0].toLowerCase()
    const letter = "r"
    return firstLetter === letter ? `${name} plays banjo` : `${name} does not play banjo`
  }
  
  console.log(areYouPlayingBanjo("rdam"));
  