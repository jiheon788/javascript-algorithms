function solution(s){  
    return [...new Set(s.split(""))].join("");
}
console.log(solution("ksekkset"));