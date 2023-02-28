// 9난쟁이 중 중복없는 7난쟁이를 뽑아야한다 -> 조합
// 9P7 / 7! = 36가지
// 조합중 합이 100인 array

const NUM_OF_DWARF = 7;

const getCombination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = getCombination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
}

const getSum = (arr) => {
  let sum = 0;
  arr.map(item => sum += item)

  return sum;
}

function solution(arr){
  let answer = getCombination(arr, NUM_OF_DWARF).filter(combination => 
    getSum(combination) === 100
  )
  
  return answer[0].join(" ");
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));