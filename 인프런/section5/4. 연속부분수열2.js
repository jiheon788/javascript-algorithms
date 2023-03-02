const getSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function solution(m, arr) {
  let answer = [];

  for (let  i = 0; i < arr.length; i++) {
    let subSet = [];
    arr.slice(i).forEach(value => {
      subSet.push(value);
      if (getSum(subSet) <= m) answer.push([...subSet]);
    })
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
