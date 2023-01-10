function solution(s) {
  let stack = [];

  s.split("").map((item) => {
    stack.push(item);

    if (stack[stack.length - 1] == ")") {
      stack.pop();
      stack.pop();
    }
  })

  return stack.length === 0 ? "YES" : "NO"
}

let a = "(()(()))(()";
console.log(solution(a));
