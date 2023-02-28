function solution(students){         
  let answer = [];

  for (let i = 0; i < students.length; i++) {
    if(answer.at(-1) < students[i] || answer.length === 0) {
      answer.push(students[i]);
    }
  }

  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));