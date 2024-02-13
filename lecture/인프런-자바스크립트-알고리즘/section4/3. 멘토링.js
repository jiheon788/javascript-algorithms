function solution(tests) {
  let pairs = [];
  const numOfTest = tests.length;
  const numOfStudents = tests[0].length;

  for (let i = 1; i <= numOfStudents; i++) {
    for (let j = 1; j <= numOfStudents; j++) {
      let cnt = 0;
      for (let k = 0; k < numOfTest; k++) {
        let rankOfI = 0;
        let rankOfJ = 0;
        for (let s = 0; s < numOfStudents; s++) {
          if (tests[k][s] === i) rankOfI = s;
          if (tests[k][s] === j) rankOfJ = s;
        }
        if (rankOfI < rankOfJ) cnt += 1;
      }
      if (cnt === numOfTest) pairs.push([i, j]);
    }
  }

  return pairs.length;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
