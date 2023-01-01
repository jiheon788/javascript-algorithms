const regAlphabet = /[a-zA-Z]/; //영어

const isEnglish = (str) => {
  if(regAlphabet.test(str)){
    return true;
  }else{
    return false;
  }
}

const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++){
    let left = str[i].toUpperCase();
    let right = str[str.length - 1 - i].toUpperCase();

    if (left !== right) {
      return false;
    }
  }

  return true
}

function solution(s){
  let filteredStr = s.split("").filter((char) => {
    if (isEnglish(char)) {
      return char.toUpperCase();
    }
  })

  return isPalindrome(filteredStr) ? "YES" : "NO"
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));