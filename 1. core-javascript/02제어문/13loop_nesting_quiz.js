let a = +prompt('한변의 길이');
let b = +prompt('나머지변의 길이');
let result = '';
for(let i = 1; i <= a; i++) {
    for(let j = 1; j <= b; j++) {
        result = result + '*';
    }
    result = result + '\n';
}
alert(result);