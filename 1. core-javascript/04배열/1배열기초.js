let food1 = '잠봉뵈르';
let food2 = '탕수륙챙이';
let food3 = '스위티';
let all = `${food1}, ${food2}, ${food3}`;


let arr = ['대', 20, '졸', '려'];
console.log(typeof arr);
console.log(arr[2] ** 2);
console.log(arr[2]);
arr[1] = '박';
// arr[3]++;

console.log(arr);


console.log(arr.length);
console.log(`첫번째 데이터${arr[0]}`);
console.log(`마지막 데이터${arr[arr.length - 1]}`);

/*배열 데이터 순회*/
console.log('====================================');
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// ...
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}




//for ~of 반복문

let weekDays = ['월', '화', '수', '목', '금', '토', '일'];
console.log('=====================================');
// for(let i = 0; i < weekDays.length; i++) {
//     console.log(`${weekDays[i]}요일!!`);
// }
for (let day of weekDays) {
    console.log(`${day}요일!!`);
}

let fruits = ['자몽', '레몬', '스위티',];
console.log(fruits.length);

let tags = [
    '<li>오렌지</li>',
    '<a href="#">링크</a>',
    '<h1>로고</h1>',
]