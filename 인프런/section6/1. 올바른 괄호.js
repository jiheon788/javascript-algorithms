function solution(s) {
  let stack = [];

  for (const char of s) {
    if (char === '(') stack.push(char)
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO"
}

let a = "(()(()))(()";
console.log(solution(a));
