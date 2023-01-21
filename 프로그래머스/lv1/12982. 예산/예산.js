function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b).forEach(item => {
        budget -= item;
        if (budget >= 0) {
            answer += 1;
        }
    })

    return answer;
}