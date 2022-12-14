/**
 * 
 * @param {*} day 날짜의 일의 자리 숫자
 * @param {*} arr 7대의 자동차 번호의 끝 두 자리 숫자
 * @returns 10부제를 위반하는 차량의 대수
 */
function solution(day, arr){
    let answer=0;

    arr.map(car => {
      if (String(car).split("")[1] == day) {
        answer += 1;
      }
    })

    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr=[25, 20, 11, 47, 53, 17, 33];
console.log(solution(0, arr));
