const employee = {
    empName: '뽀로로',
    age: 10,
    hireDate: '2020-01-30',
    birthDate: '2015-12-31',
};

// const name = employee.empName;
// const hire = employee.hireDate;
// const {empName, hireDate} = employee;
// console.log(empName, hireDate);

function foo({empName,age}) {
    // const {empName, age} = employee;
    console.log(`내 이름은 ${empName}입니다.`);
    console.log(`나이는 ${age}입니다.`);
};
foo(employee);

const age = 10;
const { age: empAge, birthDate } = employee;
//empAge = employee.age;
console.log(empAge);

const divStyle = {
    'font-size': '18px',
    'background-color': 'red',
};

const {'font-size': fontSize, 'background-color': bgColor} = divStyle;
console.log(fontSize, bgColor);


console.log('===============================');

const dog = {
    kind: '말티즈',
    name: '해피',
    age: 3,
    injection: false
};
const {kind, age:dogAge, ...rest} = dog;

console.log(kind);
console.log(dogAge);
console.log(rest);


//객체 복사

const copyDog = {...dog};
copyDog.age = 10;
console.log(copyDog);
console.log(dog);

const copydog2 = {
    ...dog,
    age: 20,
    favorite: '산책',
}
console.log(copydog2);