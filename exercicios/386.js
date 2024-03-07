function friend(friends) {
  const friendsFiltered = [];
  for (let j = 0; j < friends.length; j++) {
    if (friends[j].length == 4) {
      friendsFiltered.push(friends[j]);
    }
  }
  return friendsFiltered;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
