let a = +prompt('원하는 양의 정수를 입력해주세요.');
let n = 1;
let result = '';
while (n <= a) {
    if (n % 2 === 1) {
        result = result + '+';
    } else {
        result = result + '-';
    }
    n++;
}
alert(result);