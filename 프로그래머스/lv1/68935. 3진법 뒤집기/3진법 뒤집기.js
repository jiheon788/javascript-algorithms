function solution(n) {
    return parseInt(BigInt(n.toString(3).split("").reverse().join("")), 3);
}