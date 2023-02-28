const init = (origin) => {
  let newMap = Array.from(Array(origin.length + 2), () => Array(origin.length + 2).fill(0))
  let size = newMap.length;

  for (let row = 1; row < size - 1; row++) {
    for ( let col = 1; col < size - 1; col++) {
      newMap[row][col] =  origin[row - 1][col - 1]
    }
  }

  return newMap
}

function solution(arr){
  arr = init(arr);
  let answer = 0;
  let size = arr.length;

  for (let row = 1; row < size - 1; row++) {
    for ( let col = 1; col < size - 1; col++) {
      if (
        arr[row][col] > arr[row - 1][col] && // 상
        arr[row][col] > arr[row + 1][col] && // 하
        arr[row][col] > arr[row][col - 1] && // 좌
        arr[row][col] > arr[row][col + 1]    // 우
      ) {
        answer += 1;
      }
    }
  }
    
  return answer;
}

let arr=[
  [5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];

console.log(solution(arr));
