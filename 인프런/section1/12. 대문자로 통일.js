function solution(s){         
  let answer = [];

  s.split("").map(char => {
    answer.push(char.toUpperCase())
  })

  return answer.join("");

}

let str="ItisTimeToStudy";
console.log(solution(str));
