var x = 99; // global scope : 전역 변수

function foo() {
    var x = '홍길동'; // local scope : 지역 변수
    console.log(`foo x: ${x}`);
    console.log(`foo y: ${y}`);
    var z = 100;
    return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
// console.log(`z: ${z}`);// 못씀



console.log('=============================');

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(n);
    console.log(v);
    console.log(m);
    
    function inner() {
        console.log(n);
        var m = 'inner local m';
        console.log(m);
    }

    inner();
}

outer('outer param m')