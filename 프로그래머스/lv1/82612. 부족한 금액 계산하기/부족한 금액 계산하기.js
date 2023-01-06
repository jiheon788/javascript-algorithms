function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += (price * i);
    }
    
    let diff = money - totalPrice;

    return diff < 0 ? -diff : 0;
}