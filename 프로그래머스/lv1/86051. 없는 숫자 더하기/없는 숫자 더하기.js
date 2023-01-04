function solution(numbers) {
    let answer = Array(10).fill(0).map((n, idx) => n + idx);
    return answer.filter((num) => !(numbers.includes(num))).reduce((acc, cur) => acc + cur);
}