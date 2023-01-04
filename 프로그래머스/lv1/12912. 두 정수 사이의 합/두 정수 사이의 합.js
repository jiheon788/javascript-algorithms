function solution(a, b) {
    let answer = 0;
    let max;
    let min;

    a > b ? (
        max = a,
        min = b
    ) : (
        max = b,
        min = a
    )
    
    for (let i = min; i <= max; i++) {
        answer += i
    }
    
    return answer;
}