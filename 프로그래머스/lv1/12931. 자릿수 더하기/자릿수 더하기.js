function solution(n)
{
    var sum = 0;
    String(n).split("").map((item) => {
        sum += parseInt(item)
    })
    
    return sum
    

}