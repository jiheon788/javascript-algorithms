function solution(idList, report, k) {
    let blackList = {}; // {신고자: [신고1, 신고2]}
    let blackCntList = {}; // {신고1: 1}
    let answer = [];
    
    // init
    idList.forEach(id => {
        blackList[id] = []
        blackCntList[id] = 0;
    })
    
    report.forEach((pair, index) => {
        // 신고자
        const reporter = pair.split(" ")[0];
        // 신고 당한 사람
        const reported = pair.split(" ")[1];
        
        if (!blackList[reporter].includes(reported)) {
            blackList[reporter].push(reported);
            blackCntList[reported] += 1
        };
    })
    
    for (let id of idList) {
        mail = 0
        for (let reported of blackList[id]) {
            if (blackCntList[reported] >= k) mail += 1;
        }
        answer.push(mail)
    }
    
    return answer;
}