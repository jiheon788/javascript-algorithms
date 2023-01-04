function solution(x) {
    let sum = (x.toString().split("").map(char => Number(char)).reduce((acc, cur) => acc + cur));
    return !Boolean(x % sum);
}