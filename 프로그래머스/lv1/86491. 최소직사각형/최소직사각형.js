const getArea = (w, h) => w * h;

function solution(sizes) {
    let minArr = [];
    let maxArr = [];
    
    sizes.map((size)=>{
        minArr.push(Math.min(...size));
        maxArr.push(Math.max(...size));
    })
    
    return getArea(Math.max(...maxArr), Math.max(...minArr));
}