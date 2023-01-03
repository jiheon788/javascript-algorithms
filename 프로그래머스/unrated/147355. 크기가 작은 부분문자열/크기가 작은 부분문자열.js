function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        const subStr = t.substr(i, p.length);
        if (parseInt(subStr) <= p && subStr.length === p.length) {
            answer += 1;
        }
    }
    
    return answer;
}