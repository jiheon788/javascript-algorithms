function solution(arr){  
  let answer = [];
  let size = arr.length;

  let sumOfLeftDiagonal = 0;
  let sumOfRightDiagonal = 0;

  for (let row = 0; row < size; row++) {
    let sumOfRow = 0;
    let sumOfCol = 0;

    sumOfLeftDiagonal += arr[row][row]
    sumOfRightDiagonal += arr[row][Math.abs(row - 4)]

    for ( let col = 0; col < size; col++) {
      sumOfRow += arr[row][col]
      sumOfCol += arr[col][row]
    }
    answer.push(sumOfRow)
    answer.push(sumOfCol)
  }

  answer.push(sumOfLeftDiagonal)
  answer.push(sumOfRightDiagonal)
  
  return Math.max(...answer);
  // return answer
}

let arr = [
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

console.log(solution(arr));