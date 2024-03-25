
let pets = ['개', '고양이', '질뻐기'];

pets.push('오징어', '거북이', '비둘기');
console.log(pets);
let mypet1 = pets.pop();
pets.pop();
let mypet2 = pets.pop();

console.log(pets);
console.log(mypet1);
console.log(mypet2);

//shift() 배열의 첫 데이터 삭제
//unshift() 배열의 첫 자리에 데이터 추가
pets.shift();
console.log(pets);
pets.unshift('너구리');
console.log(pets);