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

const getSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

function solution(n, k, card) {
  let answer = []
  getCombination(card, k).map((pair) => {
    answer.push(getSum(pair))
  })

  return answer.sort((comp1, comp2) => comp2 - comp1)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
