function solution(array, commands) {
    let answer = [];
    commands.forEach(command => {
        const [i, j, k] = command;
        answer.push(array.slice().splice(i - 1, j - i + 1).sort((a, b) => a - b)[k - 1]);
    })
    
    return answer;
}