let a = +prompt('첫번째 숫자를 입력');
let b = +prompt('두번째 숫자를 입력');
let result = 0;
// if (a <= b ) {
//     while (a <= b) {
//         result += a;
//         a++;
//     }
//     alert(`${a - b}부터 ${b}까지의 합은 ${result}입니다.`)
// } else {
//     while (a >= b) {
//         result += b;
//         b++;
//     }
//     alert(`${b - a}부터 ${a}까지의 합은 ${result}입니다.`)
// }
while (a !== b) {
    if (a <= b) {
        result = result + a;
        a++;
    } else {
        result = result + a;
        a--;
    }
}
alert(result + a);