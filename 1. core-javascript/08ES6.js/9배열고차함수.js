const userList = [
    {
        account: "abc1234",
        userName: "대길이",
        job: "추노",
        address: "서울",
        hobbys: ["수영", "축구", "테니스"],
        salary: 5400,
        age: 35,
    },
    {
        account: "banana",
        userName: "빠나나",
        job: "과일",
        address: "서울",
        hobbys: ["푸드파이팅", "테니스"],
        salary: 9700000,
        age: 18,
    },
    {
        account: "park1234",
        userName: "주차왕",
        job: "발렛파킹",
        address: "경기",
        hobbys: ["족구", "축구", "테니스", "영화감상"],
        salary: 3900000,
        age: 56,
    },
    {
        account: "fire",
        userName: "불꽃남자카리스마",
        job: "게이머",
        address: "서울",
        hobbys: ["독서", "테니스"],
        salary: 7900000,
        age: 42,
    },
];

// 배열 고차함수
// forEach() : 배열의 요소를 순회..!
// for (user of userList) {
    //     console.log(`내 이름은 ${user.userName}이며 ${user.address}에 삽니다.`);
    // }
    function myForEach(arr, o) {
        for (let x of arr) {
            o(x)
        }
    }
userList.forEach(user => {
     console.log(`내 이름은 ${user.userName}이며 ${user.address}에 삽니다.`);
});
let total = 0;
[10, 20, 30].forEach(n => {
    total += n;
})
console.log(total);

// filter: 조건에 맞는 배열안의 요소를 필터링함
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(n => n % 2 === 0); 
console.log(filteredNumbers);

// 회원 목록에서 이름이 3글자인 회원들을 필터링해줘

const filteredUser = userList.filter(user => user.userName.length === 8);
console.log(filteredUser);




// map() : 배열에서 특정 데이터들을 추출해서 새로운 배열에 매핑함
console.log('==========================');


const poweredNumbers = numbers.map(n => `<li class="list-item">${n}</li>`);
console.log(poweredNumbers);

// 회원목록에서 회원의 나이를 xx세로 매핑하고싶다.

const mappedAge = userList.map(user => `${user.age}세`);
console.log(mappedAge);

// 회원목록에서 회원의 이름과 회원의 나이와 회원의 주소를 추출할건데 키값을 nickName으로 바꾸고 age를 old 주소를 addr로 바꾸고싶다.!

const mappedUserList = userList.map(user =>  ({nickName: user.userName, old: user.age, addr: user.address}));
console.log(mappedUserList);


const triple = numbers.find(n => n % 3 === 0);
console.log(`triple : ${triple}`);

const dhtlqeo = userList.find(user => user.age >= 50 && user.age < 60);
console.log(dhtlqeo);


