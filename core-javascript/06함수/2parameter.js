// x 부터 y까지의 누적 합을 구해야 함
let makeLine = function() {
    console.log('=============================================================');
}
function sumSum(x, y) {
    let total = 0;
    for (let i = x; i <= y; i++) {
        total += i;
    }
    return total;
}
console.log(sumSum(50,550));
console.log(`혼자가 아닌 나`);

function sayHello (lang = 'ko') {
    // if (lang === undefined) {
        // lang = 'ko';
    // }
    // lang = lang || 'ko';
    switch (lang) {
        case 'ko' :
            console.log('안녕하세요');
            break;
        case 'eng' :
            console.log('Hello');
            break;
        case 'chin' :
            console.log('따자하오');
            break;
        case 'jap' :
            console.log('곤니찌와');
            break;
        default : 
            console.log('ㄹㅇㅋㅋ');
    }
}
sayHello();

makeLine();
function selectRandomPet() {
    let pets = ['멈뭄미', '먀몸미', '잭잭이', '고라니', '노루궁뎅이버섯'];
    let rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(selectRandomPet());
console.log(selectRandomPet());
console.log(selectRandomPet());