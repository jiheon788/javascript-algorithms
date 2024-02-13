function solution(arr){         
  let score = 0;
  let addPoint = 1;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) { 
      // 정답일때

      if (i === 0) {
        // 첫번쨰요소
        score += addPoint;
        continue;
      } else {
        if (arr[i - 1] === 1) {
          // 직전 점수가 정답일때 가산점
          addPoint += 1
          score += addPoint;
        } else if (arr[i - 1] === 0) {
          // 직전 점수가 정답이 아닐 때
          addPoint = 1;
          score += addPoint;
        }
      }
    }
  }
  return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));