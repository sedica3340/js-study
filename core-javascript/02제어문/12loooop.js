// let count = 0;
// for (let i = 0; i < 4; i++) {
//     for(let j = 0; j < 4; j++) {
//         // console.log('오르락 내리락 반복문' + ++count);
//         console.log( `${i}, ${j}`)
//     }
// }
for(let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

for(let x = 1; x <= 3; x++) {
    console.log('오르락');
    for (let y = 1; y <= 5; y++){
        for (let z = 1; z <= 2; z++) {
            console.log('내리락');
        }
        console.log('반복문');
    }
}