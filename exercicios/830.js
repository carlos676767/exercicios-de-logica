
const maxSubArray = (arr) => {
  const my = arr.filter(data => data > 0).reduce((a,b) => a +b)
  return my 
}

module.exports = maxSubArray