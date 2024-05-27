let makeLine = function() {
    console.log('=============================================================');
}
function add(n1, n2) {
    // console.log(`n1: ${n1}, n2: ${n2}`);
    return n1 + n2;
}
// 리터니가 없는 함수
function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
// return은 함수의 탈출문(종료문)이다..!
// break마냥 씹어먹는다..!
console.log(add(10, 20) * add(add(1, add(1, add(1, add(1, 1)))), add(1, 1)));
makeLine();
multi(3, 4);
multi(add(2, 3), add(5, 6));

// 리턴이 없는 함수를 변수나 매개변수로 사용해선 안됨..!
console.log(add(5, multi(2, 2)));

// function connectDatabase(id, pw, auth) {
//     let connect = getConnection();
//     //...
//     //...
//     return //....
// }


// return이 없는 함수에서 return을 break처럼 사용하기
function callName(nickName) {
    let prohibits = ['바보', '멍청이', '메롱'];
    if(prohibits.includes(nickName)) {
        console.log('나쁜말 쓰지 마세요');
        return;
    }
    console.log(`${nickName}님 안녕하세요 !!`);
    
}
makeLine();

callName('멍청이');