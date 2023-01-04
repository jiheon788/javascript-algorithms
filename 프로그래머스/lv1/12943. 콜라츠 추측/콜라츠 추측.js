const LIMIT = 500

function solution(num) {
    for (let i = 0; i < LIMIT; i++) {
        if (num === 1) return i;
        num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
    }
    
    return -1;
}
