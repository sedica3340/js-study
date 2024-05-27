let n = 10;
while (n >= 0) {
    console.log(`${n}!!`);
    n--;
}
// for(let i = 1; i <= 9; i++) {
//     console.log(`2 x ${i} = ${i * 2}`);
// }
let j = 1;
while (j <= 9) {
    console.log(`${j}단`);
    let i = 1;
    while (i <= 9) {
    console.log(`${j} x ${i} = ${j * i}`);
    i++;
    }
    j++;
}
let m = 10;
while (m <= 34) {
    if(m % 2 === 1) {
        console.log(m);
    }
    m++;
}
let result = 0;
let k = 1;
while (k <= 100) {
    result += k;
    k++;
}
console.log(result);