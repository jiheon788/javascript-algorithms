const getNumberOfDivisors = (number) => {
    let cnt = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            cnt += 1;
        }
    }
    
    return cnt;
}

function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        getNumberOfDivisors(i) % 2 ? sum -= i : sum += i;
    }
    
    return sum;
}