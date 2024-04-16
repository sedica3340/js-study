class Dog {
    constructor(dogName, age) {
        this.dogName = dogName;
        this.age = age;  
    }
    
    
    bark() {
        console.log(`${this.dogName}가 왈왈!`);
    }
}
class DogRepository {
    constructor(){
        this.dogList = [];
    }
}
const dr = new DogRepository();
const dog1 = new Dog('초코', 2);
const dog2 = new Dog('해피', 3);
dr.dogList.push(dog1);
dr.dogList.push(dog2);
dr.dogList.push(new Dog('랄랄라', 3));
for(let i of dr.dogList) {
    i.bark();
}

// const dog1 = {
//     dogName: "뽀삐",
//     age: 3,
//     bark: function() {
//         console.log(`${this.dogName}가 왈왈`);
//     },
// };
// const dog2 = {
//     dogName: "초코",
//     age: 4,
//     bark: function() {
//         console.log(`${this.dogName}가 왈왈`);
//     }
// }
// dog1.bark();
// dog2.bark();