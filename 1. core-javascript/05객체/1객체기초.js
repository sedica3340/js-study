let dog = {
    name: 'bbobbi',
    kind: 'jindo',
    age: 3,
    injection: true,
    favorite: ['산책', '간식'],
    bark : () => console.log('왈왈'),

}

let cat = {
    name: '콩순이',
    kind: '코리안숏',
    age: 2,
    injection: true,
    favorite: ['방어지르기', '낮잠'],

}

// 객체 데이터 참조
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);


console.log(dog['name']);
console.log(dog.name);


dog.age = 4;
cat.favorite[1] = '실뭉치';
console.log(dog);
console.log(cat);


cat.friend = '뽀삐';
console.log(cat);
dog['friend'] = '콩순이';
console.log(dog);

delete cat.friend;
console.log(cat);