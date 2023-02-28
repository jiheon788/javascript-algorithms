function solution(arr){
  // 배열 길이만큼 1로 채워진 새로운 배열 생성
  let answer = Array(arr.length).fill(1);
  
  // 나보다 높은 요소가 있다면 ++ 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {   
            answer[i] += 1;
        }
    }
}
  return answer.join(" ")
}

// 입력된 순서대로 등수를 출력한다.
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
let arr2 = [92, 92, 92, 100, 76];
console.log(solution(arr2));