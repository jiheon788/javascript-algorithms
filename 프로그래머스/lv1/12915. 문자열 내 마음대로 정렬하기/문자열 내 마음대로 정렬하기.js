

function solution(strings, n) {
    let targets = [];
    let temp = [];
    let answer = [];
    
    strings.forEach(string => {
        targets.push(string.split("")[n])
    })
    
    targets = [...new Set(targets.sort())];
    
    while (targets.length > 0) {
        strings.forEach(string => {
            if (string.split("")[n] === targets[0]) {
                temp.push(string);
            }
        })
        temp.sort().forEach(item => {
            answer.push(item);
        })
        temp = [];
        targets.shift();
    }
    
    
    return answer;
}