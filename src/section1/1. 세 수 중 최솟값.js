// 조건문
function solution(a, b, c){
    return a < b && a < c ? a : b < c ? b : c;
}

// 내장함수이용
function solution2(a, b, c){
  return Math.min(a, b, c);
}

console.log(solution(6, 5, 11));
console.log(solution2(6, 5, 11));
