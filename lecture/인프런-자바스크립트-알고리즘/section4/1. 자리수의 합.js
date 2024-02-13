const getMaxIndex = (arr) => {
  let maxVal = arr[0];
  let maxIndex = 0;

  arr.map((item, index) => {
    if (item >= maxVal) {
      maxIndex = index;
    }
  })

  return maxIndex
}

function solution(n, arr){
  let sumArr = [];

  arr.map((num) => {
    let sum = 0;
    String(num).split("").map((char) => {
      sum += Number(char);
    })
    sumArr.push(sum);
  })
  
  return arr[getMaxIndex(sumArr)];
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

