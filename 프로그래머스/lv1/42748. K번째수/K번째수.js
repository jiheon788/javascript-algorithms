function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        const i = command[0];
        const j = command[1];
        const k = command[2];
        const splicedArr = array.slice().splice(i - 1, j - i + 1).sort((a, b) => a - b);
        answer.push(splicedArr[k - 1]);
    })
    
    return answer;
}