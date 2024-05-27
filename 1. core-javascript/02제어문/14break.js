// for (let i = 1; i < 50; i++) {
//     console.log(i);
//     if (i % 11 === 0) {
//         break;
//     }
// }
console.log('==============');
orange: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === j) {
            break /*orange*/;
        }
        console.log(`${i}, ${j}`)
    }
}