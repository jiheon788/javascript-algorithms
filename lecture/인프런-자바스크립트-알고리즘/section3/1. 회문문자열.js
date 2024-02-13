function solution(word){
    let answer="YES";

    for (let i = 0; i < Math.floor(word.length / 2); i++){
      let left = word[i].toUpperCase();
      let right = word[word.length - 1 - i].toUpperCase();

      if (left !== right) {
        answer = "NO"
      }
    }
    
    return answer;
}

let str="goooG";
console.log(solution(str));






