const regNumber = /[0-9]/; 

const isNumber = (str) => regNumber.test(str);

function solution(str){
  let answer = str.split("").filter((char => {
    if (isNumber(char)) {
      return char
    }
  }))
  return parseInt(answer.join(""));
}

let str="g0en2T0s8eSoft";
console.log(solution(str));