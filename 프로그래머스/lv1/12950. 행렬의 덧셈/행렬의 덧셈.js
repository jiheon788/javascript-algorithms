function solution(arr1, arr2) {
    let answer = [];
    
    for (let row = 0; row < arr1.length; row++) {
        let temp = [];
        for (let col = 0; col < arr1[0].length; col++) {
            temp.push(arr1[row][col] + arr2[row][col])
        }
        answer.push(temp)
    }
    
    return answer;
}