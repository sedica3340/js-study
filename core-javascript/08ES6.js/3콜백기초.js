// 어떤 계산이든 척척 해주는 함수?
function operate(param) {
    
    console.log('계산기 작동!!');
    const n1 = 10, n2 = 20;
    const result = param(n1, n2);
    return result;
}

function add(n1, n2) {
    return n1 + n2;
}
const r1 = operate(function(n1, n2) {return n1 + n2});
console.log(r1);
