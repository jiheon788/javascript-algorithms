const getTotal = (arr) => arr.reduce((acc, item) => acc + item[0] + item[1], 0);

function solution(m, products) {
  let answer = [];
  for (let i = 0; i < products.length; i++) {
    let stack = [];
    let sortedProducts = products.map(v => [...v]).sort((a, b) => a[0] - b[0]);
    sortedProducts[i][0] = sortedProducts[i][0] / 2;

    sortedProducts.map((sortedProduct) => {
      stack.push(sortedProduct);
      if (getTotal(stack) > m) stack.pop();
    })

    answer.push(stack.length);
  }

  return Math.max(...answer);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
