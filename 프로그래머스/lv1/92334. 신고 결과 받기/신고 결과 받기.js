function solution(idList, report, k) {
    let blackList = {}; // {신고자: [신고1, 신고2]}
    let blackCntList = {}; // {신고1: 1}
    let suspensionList = [];
    let answer = Array(idList.length).fill(0);
    
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
            
            if (blackCntList[reported] === k) suspensionList.push(reported);
        };
    })
    
    let index = 0;
    for (let key in blackList) {
        const reporteds = blackList[key]
        reporteds.forEach(reported => {
            if (suspensionList.includes(reported)) answer[index] += 1;
        })
        
        index += 1;
    }
    
    return answer;
}