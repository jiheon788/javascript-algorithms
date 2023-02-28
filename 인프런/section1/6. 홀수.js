// 홀수의 합과 홀수중 최솟값
function solution(arr){
  sumOfOdd = 0;
  arrOfOdd = arr.filter(num => num % 2 !== 0);

  arrOfOdd.map(num => {
    sumOfOdd += num;
  })
    
  return {
    "홀수 합": sumOfOdd,
    "홀수 최솟값": Math.min(...arrOfOdd)
  };
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));