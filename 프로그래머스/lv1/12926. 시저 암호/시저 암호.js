function solution(s, n) {
    let answer = "";
    for(let char of s) {
        let ascii = char.charCodeAt();
         if (
             (ascii >= 65
             && ascii + n <= 90)
             || 
             (ascii >= 97
             && ascii + n <= 122)
         ) {
            answer += String.fromCharCode(ascii + n)
         } else if (
            (ascii >= 65
            && ascii <= 90
            && ascii + n >= 90)
             ||  
            (ascii >= 97
            && ascii <= 122
            && ascii + n >= 122)
         ) {
            answer += String.fromCharCode(ascii + n - 26)
         } else {
            answer += char;
         }
        }

        return answer
}