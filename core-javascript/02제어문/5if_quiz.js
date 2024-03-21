let n1 = +prompt('정수 A');
let n2 = +prompt('정수 B');
let n3 = +prompt('정수 C');

if (n1 === n2 && n1 === n3) {
    alert('세개의 값이 모두 같습니다.');
} else if (n1 === n2 || n2 === n3 || n1 === n3) {
    alert('두개의 값이 같습니다.');
} else {
    alert('세개의 값이 모두 다릅니다');
}