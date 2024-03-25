let n1 = 10;
let n2 = '20';
console.log(n1 + n2);
let n3 = n1 + '';
console.log(typeof n3);
let n4 = n2 - n1;
console.log(n4);
console.log(n1 * n2);//200
console.log('======================================')

let n7 = -'99';
console.log(true + true);
console.log(false + true);
console.log(false + false);
console.log(true * false);

if(0) console.log('hello-1');
if('') console.log('hello-2');
if(null) console.log('hello-2');
if(undefined) console.log('hello-2');
if(NaN) console.log('hello-2');




for (let i = 1 ; i <= 10; i++) {
    if (i % 2) {
        console.log(`${i}는 홀수입니다,`);
    } else {
        console.log(`${i}는 짝수입니다.`);
    }
}

let apple = 10;
if (apple) {
    console.log('잇슴')
} else {
    console.log('업슴')
}