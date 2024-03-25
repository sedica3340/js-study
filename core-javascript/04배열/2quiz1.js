let scores = [83, 99, 100, 57];
let sum = 0;
for(let i of scores) {
    sum += i;
}
let avg = sum / scores.length;
console.log(`총점 : ${sum}점, 평균 : ${avg}점`);