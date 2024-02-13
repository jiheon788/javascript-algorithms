function solution(s){
  let answer = [];
  let cnt = 1;

  for (let index = 0; index <= s.length; index++) {
    let char = s[index];
    if (char === s[index - 1]) {
      cnt += 1;
    } else if (char !== s[index - 1]) {
      if(cnt > 1) {
        answer.push(cnt);
      }
      cnt = 1;
      answer.push(char);
    }
  }
  
  return answer.join("");
}

let str="KKHSSSSSSSE";
console.log(solution(str));