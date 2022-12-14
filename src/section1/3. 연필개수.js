const ONE_DOZEN_PENCILS = 12

function solution(n){
    if (n % ONE_DOZEN_PENCILS) {
      return parseInt(n / ONE_DOZEN_PENCILS + 1)
    }
    return parseInt(n / ONE_DOZEN_PENCILS)
}

console.log(solution(25));
console.log(solution(24));

console.log(solution(178));