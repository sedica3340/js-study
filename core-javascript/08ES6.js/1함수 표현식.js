// 함수 선언(정의)문..!
function add(n1, n2) {
    return n1 + n2;
}
const r1 = add(10, 30);
console.log(`r1 : ${r1}`);
const plus = add;

console.log(plus);
console.log(add);
//함수도 하나의 데이터이자 값이다..!
console.log(typeof plus);
console.log(typeof add);

const r2 = plus(5,8);
console.log(`r2 : ${r2}`);

// 익명 함수 : 함수를 값으로 본 경우
// 함수 표현식..!
const multiply = function(n1, n2) {
    return n1 * n2;
};
const r3 = multiply(3, 4);
console.log(`r3 : ${r3}`);

const array = [
    10, 'zzz', true, [], {}, add, multiply, function() {console.log('zzzz');},
];
const r4 = array[6](7, 9);
console.log(r4);


array[7]();
array[7]();
array[7]();

console.log('========================');

const dog = {
    name: '초코',
    age: 3,
    favorite: ['산책', '낮잠'],
    play: function(tool) {
        console.log(`${this.name} 강아지는 ${tool}장난감으로 놀아요~`);
    }
};

dog.play('개껌');
console.log(typeof Array);