const userNames = ['김철수', '강감찬', '박영희'];

//userNames에서 각각의 요소들을 다시 변수에 넣고싶다.

// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [kim, kang, park] = userNames;


console.log(`a: ${kim}, b: ${kang}, c: ${park}`);

const [kk,,pp] = userNames;
console.log(`${kk}, ${pp}`);


const example = ['', [], ()=>{}];

const [,,myFunc] = example;

myFunc();



let first = 10, second = 20;
console.log(`first: ${first}, second: ${second}`);

[first, second] = [second, first]

console.log(`first: ${first}, second: ${second}`);


//배열안에서 맨 앞의 두개만 각각의 변수에 저장하고 나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 7, 9, 11, 13];
const [a, b, ...newArr] = numbers;

console.log(`a: ${a}, b:${b}, arr:${newArr}`);

const foods = ['감자튀김', '햄버거', '콜라'];

const copyFoods = [...foods];
console.log('foods:', foods)
console.log('copyFoods:', copyFoods)


const newFoods = ['육포', ...foods, '닭다리' ,...userNames];

console.log(newFoods);