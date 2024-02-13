function solution(s){  
  if (s.length % 2) {
    return s.substr(parseInt(s.length / 2) , 1)
  }
  return s.substr(parseInt(s.length / 2) - 1 , 2);
}
console.log(solution("study"));