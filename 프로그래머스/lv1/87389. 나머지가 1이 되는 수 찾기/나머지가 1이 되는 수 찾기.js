function solution(n) {
    var answer = 0;
    
    if(n>=3 && n<=1000000){
        while (true) {
            if(n % answer === 1){
                return answer
            }
            answer += 1
        }
    }
    
    
    return answer;
}