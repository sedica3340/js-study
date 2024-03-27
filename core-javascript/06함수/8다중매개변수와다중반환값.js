let makeLine = function() {console.log('=============================================================');}
function add2(n1, n2) {
    return n1 + n2;
}
function add3(n1, n2 ,n3) {
    return n1 + n2 + n3;
}

function addAll(numbers) {
    let total = 0;
    for(let i of numbers) {
        total += i;
    }
    return total;
}

function addAllES6(...arr) {
    let total = 0;
    for(let i of arr) {
        total += i;
    }
    return total;
}

let r1 = addAll([5, 9, 2]);
console.log(r1);
makeLine();
let r2 = addAllES6(10, 20, 30);
console.log(r2);
makeLine();

function arithmeticOperate(n1, n2) {
    return {
        add: n1 + n2,
        sub: n1 - n2,
        multi: n1 * n2,
        div: n1 / n2,
    };
    
}
console.log(arithmeticOperate(20,10).add)
console.log(arithmeticOperate(20,10).sub)
console.log(arithmeticOperate(20,10).multi)
console.log(arithmeticOperate(20,10).div)



let r3 = arithmeticOperate(5, 3).multi;


