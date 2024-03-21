let n = +prompt('정수를 입력하여 주십시오');
let result = '';
let j = 0;
for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
        result = `${result}${i}\n`;
        j++;
    }
    if (n === i) {
        result = `${result}약수는 ${j}개 입니다.`;
    }
}
if (j === 2) {
    result = `${n}은(는) 소수입니다.`
}
alert(result);