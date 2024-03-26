// x 부터 y까지의 누적 합을 구해야 함
function sumSum(x, y) {
    let total = 0;
    for (let i = x; i <= y; i++) {
        total += i;
    }
    return total;
}
console.log(sumSum(50,550));