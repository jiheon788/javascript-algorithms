function solution(s){         
  let answer = 0;
  let arr = s.split("");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      answer += 1
    }
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));