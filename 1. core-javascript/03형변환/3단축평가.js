true && true;
true && false;
false && true;
false && false;



true || true;
true || false;
false || true;
false || false;

//or연산은 첫번째 truthy를 반환
console.log('Hello' || 'bye');
console.log(null || '안녕');

//and연산은 첫번째 falsy를 반환 falsy가 없다면 마지막 truthy를 반환;

console.log('Hello' && 'bye');
console.log(0 && '안녕');

if (true) {
    console.log('졸리우데자네이루');
}
true && console.log('졸상파울루');




/**
 * <h1> 안녕하세요 </h1>
 * login && <h2> xxx님 환영합니다.</h2>
 * 
 * 쿠폰당첨여부 && sendCoupon();
 * 내 게시물 여부 && <button>삭제</button>
 * 
 * 쿠폰당첨여부 || 안타까움메시지
 * !쿠폰당첨여부 && 안타까움메시지
 * 
 * 
 * 
 */


