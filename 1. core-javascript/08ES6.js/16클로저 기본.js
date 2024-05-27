//자바스크립트의 함수는 함수를 리턴할수 있다..!

function calculator(a) {
    return function (n1, n2) {
        return n1 + n2;
    };
}
const x = calculator();

const y = x(10, 20);

console.log(y);

console.log("============================");

const z = calculator()(6, 9);
console.log(z);

const operate = () => (n1, n2) => n1 * n2;

const k = operate();

console.log(k(3, 4));

console.log("============================");

function bar() {
    function fas() {
        return 10;
    }
    return fas;
}
const h = bar()();
console.log(h);

// let count = 0;

// const increase = () => ++count;
// console.log(increase());//1
// console.log(increase());//2
// count = 999;//count = 999;
// console.log(increase());//1000
// console.log(count);
// console.log('지금볼꺼');
// const increase = () => {
//     let count = 0;
//     return ++count;
// }
// increase();
// increase();
// increase();
// increase();
// increase();
// increase();
// const count = increase();
// console.log(`count: ${count}`);

// console.log('지금볼꺼');
//클로저를 통해 지역변수의 스코프를 늘려줄 수도 있다..!
console.log('본다');
const increaseClosure = () => {
    let count = 0;
    
    const helper = () => ++count;
    return helper;
};
const increase = increaseClosure();


console.log(increase());
console.log(increase());
count = 999999999999999999;
console.log(increase());
console.log(increase());

console.log('본다');
//즉시 실행 함수..! : 함수를 1회성으로 사용할 목적으로 만드는 함수..!

(function () {
    console.log('hello');
})();

// const incClosure = () => {
//     let count = 0;
//     return () => {
//         return ++count;
//     }
// }
const increase_ =  (() => {
    let count = 0;
    return () => {
        return ++count;
    }
})();
console.log(increase_());
console.log(increase_());
console.log(increase_());

