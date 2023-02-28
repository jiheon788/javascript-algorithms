function solution(s, t){
    let answer=0;

    s.split("").map(char => {
      if (char === t) {
        answer += 1
      }
    })

    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

