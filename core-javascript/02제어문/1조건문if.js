/*

랜덤 정수 생성하기 : Math.random()

*/ 
// let randomNumber = Math.random();
// console.log(`랜덤값: ${randomNumber}`);
//랜덤 범위 정수값 공식
// math.floor(Math.random() * (y - x + 1)) + x
// # 117 ~ 142
// Math.floor(Math.random() * (142 - 117 + 1)) + 117
// Math.floor(Math.random() * (26)) + 117


let score = Math.floor(Math.random() * 101);
console.log(`점수: ${score}점`);

if (score >= 60) {
    console.log('합격입니다 축하합니다.');
} else {
    console.log('실격입니다.')
}
console.log('수고하셨습니다.');