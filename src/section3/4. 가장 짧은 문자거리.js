const getTargetIndexes = (str, target) => {
  let temp = [];
  for (let  i = 0; i < str.length; i++) {
    if (str[i] === target) {
      temp.push(i);
    }
  }

  return temp;
}

function solution(str, target){
  str = str.split("");
  let answer=[];
  let targetIndexes = getTargetIndexes(str, target);

  for (let  i = 0; i < str.length; i++) {
    // 차이의 절댓값을 저장 -> 그 중 최소값만 answer애 푸쉬
    let temp = [];
    targetIndexes.map((index) => {
      temp.push(Math.abs(i - index))
    })

    answer.push(Math.min(...temp))
  }
  
  return answer.join(" ");
}

let str="teachermode";
console.log(solution(str, 'e'));