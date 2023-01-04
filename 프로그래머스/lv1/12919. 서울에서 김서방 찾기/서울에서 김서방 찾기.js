const TEMPLATE = (index) => `김서방은 ${index}에 있다`

function solution(seoul) {
    return TEMPLATE(seoul.indexOf("Kim"));
}