/**
 *  기능1: 자연수를 뒤집는 기능
 *  기능2: 소수판별기
 */

const getReverseNum = (origin) => {
  return Number(String(origin).split("").reverse().join(""))
}

const isPrime = (num) => {
  if(num === 1) {
    return false;
  }
  if(num === 2) {
    return true;
  }

  // num의 제곱근보다 큰 수까지 반복문을 돌릴 필요 없다
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true; 
}

function solution(arr) {
  let answer = [];
  arr.map((item) => {
    const reverseNum = getReverseNum(item);
    if (isPrime(reverseNum)) {
      answer.push(reverseNum);
    }
  })
  
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));