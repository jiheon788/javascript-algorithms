function solution(s) {
    if (s.length % 2) {
        return s.substr(Math.floor(s.length / 2) , 1)
    }
    
    return s.substr(Math.floor(s.length / 2) - 1 , 2);
}