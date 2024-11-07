function solution(str){
    return str.split(``).reduceRight((acc, ac) => acc + ac)
  }
  