const isPrime = (num) => {
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}

function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer += 1;
    }
    
    return answer;
}