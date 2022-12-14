function solution(a, b, c){
    let answer = a < b && a < c ? a : b < c ? b : c
    
    return answer;
}

console.log(solution(6, 5, 11));