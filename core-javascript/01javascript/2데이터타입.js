let num = 27;
console.log(typeof num);

console.log(num / 5);

let foodName = '국수';
console.log(foodName);
let element = `
<nav>
    <ul>
        <li>딸기</li>
    </ul>
</nav>`;
console.log(element);
console.log('==============================================');
let month = 4;
let day = 5;
let anni = '식목일';

let sentence = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence);
console.log('==============================================');

let userAge = 599.4;
let flag = userAge > 19;
console.log(flag);

console.log('==============================================');
let petName;
console.log(petName);
const girlFriend = null;
console.log(girlFriend); //so sad T^T

function buyNewCar(money) {
    if (money > 5000) return 'grandeur';
    else if (money > 3000) return 'avante';
    else return null;
};