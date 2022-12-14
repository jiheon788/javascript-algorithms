// 세 변의 길이를 줬을 때 길이가 가장 긴 변의 길이는 다른 두 변 길이의 합보다 작아야 삼각형을 그릴 수 있다.

function solution(a, b, c){
    biggestValue = a > b && a > c ? a : b > c ? b : c
    sumOfSmallerValue = 0;

    [a, b, c].map(num => {
      if (num !== biggestValue) {
        sumOfSmallerValue += num
      }
    })
    
    return sumOfSmallerValue > biggestValue ? "YES" : "NO"
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
