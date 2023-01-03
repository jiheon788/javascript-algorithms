function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    
    for (char of s.toLowerCase()) {
        if (char === "p") pCnt += 1;
        if (char === "y") yCnt += 1;
    }

    return pCnt === yCnt;
}