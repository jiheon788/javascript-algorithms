function solution(n) {
    return n.toString().split("").reverse().map(item => Number(item));
}