function solution(criteria, arr){         
  let answer=[];

  arr.map(num => {
    if(num >= criteria) {
      answer.push(num)
    }
  })
  return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(6, arr));