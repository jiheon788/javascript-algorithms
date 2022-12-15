function solution(s){  
    let answer = [];
    let strArr = s.split("")

    strArr.map(char => {
      char === char.toUpperCase() ? 
        answer.push(char.toLowerCase()) 
          :
        answer.push(char.toUpperCase()) 
        
    })
    return answer.join("");
}

console.log(solution("StuDY"));