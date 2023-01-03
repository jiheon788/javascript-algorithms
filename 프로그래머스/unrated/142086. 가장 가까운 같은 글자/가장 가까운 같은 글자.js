function solution(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++) {
        let cnt = 0;
        let isSame = false;
        
        for (let j = i - 1; j >= 0; j--) {
            cnt += 1;
            if (s.split("")[i] === s.split("")[j]) {
                isSame = true;
                answer.push(cnt);
            }
            if (isSame) {
                j = -1
            }
        }
        
        if (!isSame) {
            answer.push(-1);
        }
    }
    
    return answer;
}