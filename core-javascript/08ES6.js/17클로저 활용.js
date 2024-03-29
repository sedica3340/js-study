// const increase = (() => {
//     let count = 0;
//     return () => ++count;
// })();
// const decrease = (() => {
//     let count = 0;
//     return () => --count;
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());

// const countClosure = () => {
//     let count = 0;
//     const increase = () => {
//         return () => ++count;
//     }
//     const decrease = () => {
//         return () => --count;
//     }
//     return {
//         increase: increase,
//         decrease: decrease,
//     }
// }

const { increase, decrease } = (() => {
    let count = 0;
    return {
        increase: () => ++count,
        decrease: () => --count,
    };
})();
console.log(increase());//1
console.log(increase());//2
console.log(increase());//3
console.log(increase());//4
console.log(decrease());//3
console.log(decrease());//2


