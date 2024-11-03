const orderNarString = (msg) => {
  return msg.split(" ").sort((a, b) => a.length - b.length);
};

console.log(orderNarString("carlos ola me chamo"));
