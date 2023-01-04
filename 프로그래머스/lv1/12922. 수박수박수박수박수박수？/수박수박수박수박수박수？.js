function solution(n) {
    return Array(n).fill(0).map((item, index) => index % 2 ? "박" : "수").join("");
}