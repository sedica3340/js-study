let a = +prompt('양의 정수를 입력하세요')
let result = '';
for (let i = 2; i <= a; i = i * 2) {
    result = result + ' '+ i;
}
alert(result);