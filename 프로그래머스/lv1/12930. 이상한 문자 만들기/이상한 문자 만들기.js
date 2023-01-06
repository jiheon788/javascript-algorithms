function solution(s) {
    return s.split(" ").map(word => word.split("").reduce((acc, cur, idx) => acc + (idx % 2 === 0 ? cur.toUpperCase() : cur.toLowerCase()), "")).join(" ")
}