function domainName(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
  return url.match(regex)[1].split(`.`)[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
