

function solution(str, ending) {
  const str1 = str.split("");
  const valueStr1Pop1 = str1.pop();
  const valueStr1Pop2 = str1.pop();
  const novaStr1 = valueStr1Pop1.concat(valueStr1Pop2).split("").reverse().join("")

  const str2 = ending.split("");
  const valueStr2Pop1 = str2.pop();
  const valueStr2Pop2 = str2.pop();
  const novaStr2 = valueStr2Pop1.concat(valueStr2Pop2).split("").reverse().join("")

  if (!novaStr1 == novaStr2) {
    return false
  }else{
    return true
  }
}


solution('sumo', 'omo')
