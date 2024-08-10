function myLanguages(results) {
  const object = Object.entries(results).filter((data) => data[1] >= 60)
  .sort((a,b) => b[1] - a[1]).map(data => data[0])
  return object;
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65} )); 
