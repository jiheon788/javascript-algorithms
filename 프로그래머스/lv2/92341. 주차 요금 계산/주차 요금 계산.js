const MINUTE_PER_HOUR = 60;

const changeToMinute = (time) => {
    let hour = parseInt(time.split(":")[0])
    let minute = parseInt(time.split(":")[1])
    
    return minute + (hour * MINUTE_PER_HOUR);
}

const sumTime = (timeTable) => {
    let sum = 0;
    for (let i = timeTable.length - 1; i >= 0; i--) {
        i % 2 === 0 ? sum -= timeTable[i] : sum += timeTable[i];
    }
    return sum;
}

const sumFee = (fees, parkingTime) => {
    const [DEFAULT_TIME, DEFAULT_CHARGE, UNIT, UNIT_CHARGE] = fees;
    
    return parkingTime <= DEFAULT_TIME ? 
        DEFAULT_CHARGE 
        : Math.ceil((parkingTime - DEFAULT_TIME) / UNIT) * UNIT_CHARGE + DEFAULT_CHARGE;
}

function solution(fees, records) {
    var answer = [];
    let hashMap = {};
    
    records.forEach(record => {
        if (hashMap[record.split(" ")[1]]) {
            hashMap[record.split(" ")[1]].push(changeToMinute(record.split(" ")[0]));
        } else {
            hashMap[record.split(" ")[1]] = [changeToMinute(record.split(" ")[0])];
        }
    })
    
    for (let key in hashMap) {
        if (hashMap[key].length % 2 !== 0) {
            hashMap[key].push(changeToMinute('23:59'));
        }
        hashMap[key] = sumFee(fees, sumTime(hashMap[key]));
    }
    
    Object.keys(hashMap).sort().map(sortedKey => {
        answer.push(hashMap[sortedKey]);
    })
    
    return answer;
}