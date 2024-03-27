// // 디프리케이티드
// let x = 10;

// //ㄹㅇ10만줄

// // let x = 'ddd';

// console.log(`x : ${x}`);



// 2. var는 블록 레벨 스코프를 지원하지 않음.
let i = '메롱';

for(let i = 0; i < 3; i++) {
    console.log(`for - i: ${i}`)
}
console.log(`global-i : ${i}`);

// 3. 호이스팅 : 선언 위치와 관계없이 참조를 해버려..!

hobby = '댄스';

// ... code

var hobby;
// let hobby;

console.log(hobby);