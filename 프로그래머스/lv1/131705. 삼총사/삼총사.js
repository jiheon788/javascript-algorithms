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

const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0);

function solution(numbers) {
    return getCombination(numbers, 3).filter(combination => getSum(combination) === 0).length;
}