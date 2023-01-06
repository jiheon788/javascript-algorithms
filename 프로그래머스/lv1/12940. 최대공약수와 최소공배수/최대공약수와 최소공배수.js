// 유클리드 호제법(Euclidean Algorithm)
const euclidean = (a, b) => {
    let r = a % b;
    if(r === 0) return b;
    return euclidean(b, r);
}

function solution (n, m) {
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    
    let gcd = euclidean(max, min);
    let lcm = n * m / gcd;
    
    return [gcd, lcm];
}