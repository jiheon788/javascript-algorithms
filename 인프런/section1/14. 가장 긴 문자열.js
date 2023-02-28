function solution(s){  
    let longString = s[0];

    s.map(str => {
      if (str.length > longString.length) {
        longString = str;
      }
    })

    return longString;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));