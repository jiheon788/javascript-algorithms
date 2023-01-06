function solution(s) {
    if(!(s.length == 4 || s.length == 6)) return false

    
    for (char of s) {
        if (!(Number.isInteger(Number(char)))) return false
    }
    
    return true;
}

