function solution(s) {
  let stack = [];
  for (const char of s) {
    if (char !== ')') stack.push(char);
    else {
      for (let i = stack.length - 1; i >= 0; i--) {
        stack.pop();
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          break;
        }
      }
    }
  }


  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
